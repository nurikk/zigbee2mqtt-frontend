import React, { Component, FunctionComponent, PropsWithChildren } from "react";
import { CompositeFeature, Endpoint, FeatureAccessMode, GenericExposedFeature } from "../../../types";
import { isBinaryFeature, isColorFeature, isCoverFeature, isEnumFeature, isLightFeature, isLockFeature, isNumericFeature, isSwitchFeature, isTextualFeature } from "../../device-page/type-guards";
import RefreshIcon from '@material-ui/icons/Refresh';
import Numeric from "../numeric/numeric";

import { BaseFeatureProps } from "../base";
import Binary from "../binary/binary";
import Enum from "../enum/enum";
import Light from "../light/light";
import Switch from "../switch/switch";
import Cover from "../cover/cover";
import Lock from "../lock/lock";
import Color from "../composite/color/color";
import Textual from "../textual/textual";
import { Grid, IconButton, Typography } from "@material-ui/core";


type CompositeType = "composite" | "light" | "switch" | "cover" | "lock" | "fan";

interface CompositeProps extends BaseFeatureProps<CompositeFeature> {
  type: CompositeType;
  stepsConfiguration?: object;
}

type FetatureWrapperProps = {
  feature: CompositeFeature | GenericExposedFeature;
  onRead(endpoint: Endpoint, value: object): void;
};
const FeatureWrapper: FunctionComponent<PropsWithChildren<FetatureWrapperProps>> = (props) => {
  const { children, feature, onRead } = props;
  return <Grid container spacing={2}>
    <Grid item xs={3}>
      <Typography title={JSON.stringify(feature)}>{feature.name}{feature.endpoint ? `_${feature.endpoint}` : null}</Typography>
    </Grid>
    <Grid item xs={6} sm={8}>
      {children}
    </Grid>

    <Grid item xs={1}>
      {feature.access & FeatureAccessMode.ACCESS_READ ? (
        <IconButton aria-label="refresh" color="primary" onClick={() => {
          onRead(feature.endpoint, { [feature.name]: "" })
        }}>
          <RefreshIcon />
        </IconButton>
      ) : null}
    </Grid>
  </Grid>
}

export default class Composite extends Component<CompositeProps, {}> {
  renderFeature = (feature: CompositeFeature | GenericExposedFeature) => {
    const { deviceState, device, onChange, onRead, stepsConfiguration } = this.props;

    const genericParams = { key: JSON.stringify(feature), device, deviceState, onChange, onRead };
    const wrapperParams = { key: JSON.stringify(feature), feature, onRead };

    if (isBinaryFeature(feature)) {
      return <FeatureWrapper {...wrapperParams}>
        <Binary feature={feature} {...genericParams} />
      </FeatureWrapper>
    } else if (isNumericFeature(feature)) {
      return <FeatureWrapper {...wrapperParams}>
        <Numeric feature={feature} {...genericParams}
          steps={stepsConfiguration?.[feature.name]} />
      </FeatureWrapper>
    } else if (isTextualFeature(feature)) {
      return <FeatureWrapper {...wrapperParams}>
        <Textual feature={feature} {...genericParams} />
      </FeatureWrapper>
    } else if (isEnumFeature(feature)) {
      return <FeatureWrapper {...wrapperParams}>
        <Enum feature={feature} {...genericParams} />
      </FeatureWrapper>
    } else if (isLightFeature(feature)) {
      return <Light feature={feature} {...genericParams} />
    } else if (isSwitchFeature(feature)) {
      return <Switch feature={feature} {...genericParams} />
    } else if (isCoverFeature(feature)) {
      return <Cover feature={feature} {...genericParams} />
    } else if (isLockFeature(feature)) {
      return <Lock feature={feature} {...genericParams} />
    } else if (isColorFeature(feature)) {
      return <FeatureWrapper {...wrapperParams}>
        <Color feature={feature} {...genericParams} />
      </FeatureWrapper>
    }
    return (<FeatureWrapper {...wrapperParams}>
      <label className="col-3 col-form-label">Unknown feature (<strong>{feature.type}</strong>)</label>
      <div className="col-9">{JSON.stringify(feature)}{JSON.stringify(deviceState)}</div>
    </FeatureWrapper>);
  }
  render() {
    const { feature: { features } } = this.props;

    return features?.map(this.renderFeature);

  }
}
