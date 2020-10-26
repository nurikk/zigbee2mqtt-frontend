import React, { Component, FunctionComponent, PropsWithChildren } from "react";
import { ColorFeature, CompositeFeature, Endpoint, EnumFeature, GenericExposedFeature } from "../../../types";
import { scale, withEndpoint } from "../../../utils";
import { isBinaryFeature, isCompositeFeature, isCoverFeature, isEnumFeature, isLightFeature, isLockFeature, isNumericFeature, isSwitchFeature } from "../../device-page/type-guards";

import Numeric from "../numeric/numeric";

import { BaseFeatureProps } from "../base";
import Binary from "../binary/binary";
import Enum from "../enum/enum";
import { ValueWithLabelOrPrimitive } from "../../enum-editor/enum-editor";
import Light from "../light/light";
import Switch from "../switch/switch";
import Cover from "../cover/cover";
import Lock from "../lock/lock";
import Color from "../composite/color/color";


type CompositeType = "composite" | "light" | "switch" | "cover" | "lock";

interface CompositeProps extends BaseFeatureProps<CompositeFeature> {
  type: CompositeType;
}


const stepsConfiguration = {
  light: {
    brightness: [0, 25, 50, 75, 100].map<ValueWithLabelOrPrimitive>(item => ({ value: scale(item, [0, 100], [0, 255]), title: item + '%' })),
    'color_temp': [1000, 2000, 3000, 4000, 5000, 6500].map<ValueWithLabelOrPrimitive>(kelvin => ({ value: 1000000.0 / kelvin, title: kelvin + 'K' }))
  },
  cover: {
    position: [0, 25, 50, 75, 100].map<ValueWithLabelOrPrimitive>(item => ({ value: item, title: item + '' })),
    tilt: [0, 25, 50, 75, 100].map<ValueWithLabelOrPrimitive>(item => ({ value: item, title: item + '' }))
  }
};

const FeatureWrapper: FunctionComponent<PropsWithChildren<{ feature: CompositeFeature | GenericExposedFeature }>> = (props) => {
  const { children, feature } = props;
  return <div className="row mb-3">
    <label className="col-3 col-form-label"><strong title={JSON.stringify(feature)}>{withEndpoint(feature.name, feature.endpoint)}</strong></label>
    <div className="col-9 d-flex align-items-center">
      {children}
    </div>
  </div>
}

export default class Composite extends Component<CompositeProps, {}> {
  renderFeature = (feature: CompositeFeature | GenericExposedFeature) => {
    const { type, deviceState, device, onChange } = this.props;


    if (isBinaryFeature(feature)) {
      return <FeatureWrapper
        key={JSON.stringify(feature)}
        feature={feature}>
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
        feature={feature}>
        <Numeric
          feature={feature}
          device={device}
          deviceState={deviceState}
          onChange={onChange}
          steps={stepsConfiguration[type]?.[feature.name]}
        />
      </FeatureWrapper>
    } else if (isEnumFeature(feature)) {
      return <FeatureWrapper
        key={JSON.stringify(feature)}
        feature={feature}>
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
    } else if (isCompositeFeature(feature)) {
      switch (feature.name) {
        case "color_xy":
        case "color_hs":
          return <FeatureWrapper
            key={JSON.stringify(feature)}
            feature={feature}>
            <Color key={JSON.stringify(feature)}
              feature={feature as ColorFeature}
              device={device}
              deviceState={deviceState}
              onChange={onChange} />
          </FeatureWrapper>
        default:
          break;
      }
    }

    return (<FeatureWrapper
      key={JSON.stringify(feature)}
      feature={feature}>
      <label className="col-3 col-form-label">Unknown feature {feature.type}(<strong>{feature.name}</strong>)</label>
      <div className="col-9">{JSON.stringify(feature)}{JSON.stringify(deviceState)}</div>
    </FeatureWrapper>);

  }
  render() {
    const { feature: { features } } = this.props;

    return features?.map(this.renderFeature);

  }
}
