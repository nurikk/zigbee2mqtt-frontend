import React from "react";

import { ISubmitEvent, withTheme } from "@rjsf/core";
import { Theme as Bootstrap5Theme } from '@rjsf/bootstrap-5';

const Form = withTheme(Bootstrap5Theme);
import { JSONSchema7 } from "json-schema"
import { KVP, Z2MConfig } from "../../types";
import get from "lodash/get";
import set from "lodash/set";
import styles from "./log-level-config.module.css";


type ConfigureLogsProps = {
    schema: JSONSchema7;
    schemaKey: string;

    config: Z2MConfig;
    configKey: string;
    onChange(data: Record<string, unknown>): void;

}
export default function ConfigureLogs(props: ConfigureLogsProps): JSX.Element {
    const { schema = {}, schemaKey = '', config = {}, configKey = '', onChange } = props;
    const formData = get(config, configKey, {});
    const _schema = get(schema, schemaKey, {});
    const handleChange = (params: ISubmitEvent<KVP | KVP[]>) => {
        const payload = {};
        set(payload, configKey, params.formData);
        onChange(payload);
    }
    return <Form schema={_schema} className={styles["hide-description"]}
        formData={formData}
        onChange={handleChange}
    ><div/></Form>
}
