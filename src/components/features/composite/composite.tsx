import React, { Component, FunctionComponent, PropsWithChildren } from "react";
import { CompositeFeature, Endpoint, FeatureAccessMode, GenericExposedFeature } from "../../../types";
import { isBinaryFeature, isClimateFeature, isColorFeature, isCompositeFeature, isCoverFeature, isEnumFeature, isLightFeature, isLockFeature, isNumericFeature, isSwitchFeature, isTextualFeature } from "../../device-page/type-guards";

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
import Button from "../../button";
import groupBy from "lodash/groupBy";
import Climate from "../climate/climate";


type CompositeType = "composite" | "light" | "switch" | "cover" | "lock" | "fan" | "climate";

interface CompositeProps extends BaseFeatureProps<CompositeFeature> {
  type: CompositeType;
  stepsConfiguration?: object;
}

interface CompositeState {
  [key: string]: unknown;
}

type FetatureWrapperProps = {
  feature: CompositeFeature | GenericExposedFeature;
  onRead(endpoint: Endpoint, property: object): void;
};
const FeatureWrapper: FunctionComponent<PropsWithChildren<FetatureWrapperProps>> = (props) => {
  const { children, feature, onRead } = props;
  const isColor = feature.name?.startsWith("color_"); //hardcode for color
  const isReadable = (feature.access & FeatureAccessMode.ACCESS_READ) || isColor;
  return <div className="row">
    <div className="col-12 col-md-3">
      <label className="col-form-label">
        <div>
          <strong title={JSON.stringify(feature)}>{feature.name}</strong>
          {isReadable ? (
            <Button<CompositeFeature | GenericExposedFeature> item={feature} onClick={(item) => {
              onRead(feature.endpoint, { [item.property]: "" })
            }} className="btn btn-primaty"><i className="fa fa-sync"></i></Button>
          ) : null}
        </div>
        {feature.description ? <small className="d-block text-muted">{feature.description}</small> : null}
      </label>

    </div>


    <div className="col-12 col-md-9 d-flex align-items-center">
      {children}
    </div>

  </div>
}

export default class Composite extends Component<CompositeProps, CompositeState> {
  state: Readonly<CompositeState> = {}
  onChange = (endpoint: Endpoint, value: object) => {
    const { onChange, feature } = this.props;
    if (isCompositeFeature(feature)) {
      this.setState(value)
    } else {
      onChange(endpoint, value);
    }
  }
  onApplyClick = () => {
    const { onChange, feature: { endpoint, property } } = this.props;
    onChange(endpoint, property ? { [property]: this.state } : this.state);
  }

  onRead = (endpoint: Endpoint, property: object) => {
    const { onRead, feature } = this.props;
    if (isCompositeFeature(feature)) {
      onRead(endpoint, {[feature.property]: property})
    } else {
      onRead(endpoint, property);
    }

  }
  renderFeature = (feature: CompositeFeature | GenericExposedFeature) => {
    const { deviceState, device, stepsConfiguration } = this.props;


    const genericParams = { key: JSON.stringify(feature), device, deviceState, onChange: this.onChange, onRead: this.onRead };
    const wrapperParams = { key: JSON.stringify(feature), feature, onRead: this.onRead };

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
    } else if (isClimateFeature(feature)) {
      return <Climate feature={feature} {...genericParams} />
    } else if (isCompositeFeature(feature)) {
      return <FeatureWrapper {...wrapperParams}>
        <div className="row">
          <Composite type="composite" feature={feature} {...genericParams} />
        </div>
      </FeatureWrapper>
    }
    return (<FeatureWrapper {...wrapperParams}>
      <pre>{JSON.stringify(feature, null, 4)}</pre>
    </FeatureWrapper>);
  }
  render() {
    const MAGIC_NO_ENDPOINT = 'MAGIC_NO_ENDPOINT';
    const { feature } = this.props;
    const { features } = feature;
    const groupedFeatures = groupBy(features, f => f.endpoint ?? MAGIC_NO_ENDPOINT);
    const result = [];
    if (groupedFeatures[MAGIC_NO_ENDPOINT]) {
      result.push(...groupedFeatures[MAGIC_NO_ENDPOINT].map(this.renderFeature));
      delete groupedFeatures[MAGIC_NO_ENDPOINT];
    }
    for (const epName in groupedFeatures) {
      const featuresGroup = groupedFeatures[epName];
      result.push(<div key={epName}>Endpoint: {epName}<div className="ps-4">{...featuresGroup.map(this.renderFeature)}</div></div>);
    }
    if (isCompositeFeature(feature)) {
      result.push(<div key={feature.name}><Button className="btn btn-primary float-right" onClick={this.onApplyClick}>Apply</Button></div>)
    }
    return result;

  }
}
