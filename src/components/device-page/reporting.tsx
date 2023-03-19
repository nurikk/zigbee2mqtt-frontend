import React, { useMemo, useState } from "react";
import { Device, Cluster, Endpoint, Attribute } from "../../types";

import actions, { ReportingApi } from "../../actions/actions";
import { connect } from "unistore/react";
import { GlobalState } from "../../store";
import ReportingRow from "./reporting-row";


type PropsFromStore = Pick<GlobalState, 'groups' | 'devices'>;
interface ReportingProps {
    device: Device;
}

export interface NiceRepointingRule {
    id?: number;
    isNew?: number;
    endpoint: Endpoint;

    cluster: Cluster;
    attribute: Attribute;
    minimum_report_interval: number;
    maximum_report_interval: number;
    reportable_change: number;
}
const convertBindingsIntoNiceStructure = (device: Device): NiceRepointingRule[] => {
    const niceReportingRules: NiceRepointingRule[] = [];
    Object.entries(device.endpoints).forEach(([endpoint, description]) => {
        description.configured_reportings
            .forEach(reportingRule => {
                niceReportingRules.push({
                    ...reportingRule,
                    endpoint
                } as NiceRepointingRule)
            });
    });
    return niceReportingRules;
}


const rule2key = (rule: NiceRepointingRule): string => `${rule.isNew}${rule.endpoint}${rule.cluster}-${rule.attribute}`;

function Reporting(props: ReportingProps & PropsFromStore & ReportingApi): JSX.Element {
    const { configureReport, device } = props;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [newReportingRule] = useState<NiceRepointingRule>({ isNew: Date.now(), reportable_change: 0, minimum_report_interval: 60, maximum_report_interval: 3600, endpoint: "", cluster: "", attribute: "" })

    const onApply = (rule: NiceRepointingRule): void => {
        const { cluster, endpoint, attribute, minimum_report_interval, maximum_report_interval, reportable_change } = rule;
        configureReport(`${device.friendly_name}/${endpoint}`, {
            cluster, attribute, minimum_report_interval, maximum_report_interval, reportable_change
        });
    }
    const reportingRules = useMemo(() => convertBindingsIntoNiceStructure(device), [device]);
    return (
        <div className="container-fluid">
            {
                [...reportingRules, newReportingRule].map((rule) =>
                    <ReportingRow
                        key={rule2key(rule)}
                        rule={rule}
                        device={device}
                        onApply={onApply}
                    />)
            }

        </div>
    );
}


const mappedProps = ["devices", "groups"];
const ConnectedReportingPage = connect<ReportingProps, Record<string, unknown>, GlobalState, PropsFromStore & ReportingApi>(mappedProps, actions)(Reporting);
export default ConnectedReportingPage
