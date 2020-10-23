/* eslint-disable @typescript-eslint/camelcase */
import React, { Component, FunctionComponent, PropsWithChildren } from "react";
import { CompositeFeature, EnumFeature, GenericExposedFeature } from "../../../types";
import { scale } from "../../../utils";
import { isBinaryFeature, isCoverFeature, isEnumFeature, isLightFeature, isLockFeature, isNumericFeature, isSwitchFeature } from "../../device-page/type-guards";

import Numeric from "../numeric/numeric";

import { BaseFeatureProps } from "../base";
import Binary from "../binary/binary";
import Enum from "../enum/enum";
import { ValueWithLabelOrPrimitive } from "../../enum-editor/enum-editor";
import Light from "../light/light";
import Switch from "../switch/switch";
import Cover from "../cover/cover";
import Lock from "../lock/lock";

type CompositeType = "composite" | "light" | "switch" | "cover" | "lock";

interface CompositeProps extends BaseFeatureProps<CompositeFeature> {
  type: CompositeType;
}


const stepsConfiguration = {
  light: {
    brightness: [0, 25, 50, 75, 100].map<ValueWithLabelOrPrimitive>(item => ({ value: scale(item, [0, 100], [0, 255]), title: item + '%' })),
    color_temp: [1000, 2000, 3000, 4000, 5000, 6500].map<ValueWithLabelOrPrimitive>(kelvin => ({ value: 1000000.0 / kelvin, title: kelvin + 'K' }))
  },
  cover: {
    position: [0, 25, 50, 75, 100].map<ValueWithLabelOrPrimitive>(item => ({ value: item, title: item + '' })),
    tilt: [0, 25, 50, 75, 100].map<ValueWithLabelOrPrimitive>(item => ({ value: item, title: item + '' }))
  }
};

const FeatureWrapper: FunctionComponent<PropsWithChildren<{ name: string }>> = (props) => {
  const { children, name } = props;
  return <div className="row mb-3">
    <label className="col-3 col-form-label"><strong>{name}</strong></label>
    <div className="col-9">
      {children}
    </div>
  </div>
}

export default class Composite extends Component<CompositeProps, {}> {
  renderFeature = (feature: CompositeFeature | GenericExposedFeature) => {
    const { type, deviceState, device, onChange } = this.props;
    const steps = stepsConfiguration[type] ?? {};

    if (isBinaryFeature(feature)) {
      return <FeatureWrapper
        key={JSON.stringify(feature)}
        name={feature.name}>
        <Binary
          feature={feature}
          device={device}
          deviceState={deviceState}
          onChange={onChange}
        />
      </FeatureWrapper>

    } else if (isNumericFeature(feature)) {
      return <FeatureWrapper
        key={JSON.stringify(feature)}
        name={feature.name}>
        <Numeric
          feature={feature}
          device={device}
          deviceState={deviceState}
          onChange={onChange}
          steps={steps[feature.name]}
        />
      </FeatureWrapper>
    } else if (isEnumFeature(feature)) {
      return <FeatureWrapper
        key={JSON.stringify(feature)}
        name={feature.name}>
        <Enum
          feature={feature as EnumFeature}
          device={device}
          deviceState={deviceState}
          onChange={onChange}

        />
      </FeatureWrapper>
    } else if (isLightFeature(feature)) {
      return (
        <Light key={JSON.stringify(feature)}
          feature={feature}
          device={device}
          deviceState={deviceState}
          onChange={onChange}
        />

      )
    } else if (isSwitchFeature(feature)) {
      return (
        <Switch key={JSON.stringify(feature)}
          feature={feature}
          device={device}
          deviceState={deviceState}
          onChange={onChange}
        />
      )
    }
    else if (isCoverFeature(feature)) {
      return (
        <Cover key={JSON.stringify(feature)}
          feature={feature}
          device={device}
          deviceState={deviceState}
          onChange={onChange}
        />
      )
    }
    else if (isLockFeature(feature)) {
      return (
        <Lock
          key={JSON.stringify(feature)}
          feature={feature}
          device={device}
          deviceState={deviceState}
          onChange={onChange}
        />
      )
    }
    else {
      return (<FeatureWrapper
        key={JSON.stringify(feature)}
        name={feature.name}>
        <label className="col-3 col-form-label">Unknown feature {feature.type}(<strong>{feature.name}</strong>)</label>
        <div className="col-9">{JSON.stringify(feature)}{JSON.stringify(deviceState)}</div>
      </FeatureWrapper>);
    }
  }
  render() {
    const { feature: { features } } = this.props;

    return features?.map(this.renderFeature);

  }
}
