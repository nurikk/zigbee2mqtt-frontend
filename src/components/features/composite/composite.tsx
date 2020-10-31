import React, { Component, FunctionComponent, PropsWithChildren } from "react";
import { CompositeFeature, GenericExposedFeature } from "../../../types";
import { scale } from "../../../utils";
import { isBinaryFeature, isColorFeature, isCoverFeature, isEnumFeature, isLightFeature, isLockFeature, isNumericFeature, isSwitchFeature, isTextualFeature } from "../../device-page/type-guards";

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
import Textual from "../textual/textual";


type CompositeType = "composite" | "light" | "switch" | "cover" | "lock" | "fan";

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
    <label className="col-3 col-form-label"><strong title={JSON.stringify(feature)}>{feature.name}{feature.endpoint ? `_${feature.endpoint}` : null}</strong></label>
    <div className="col-9 d-flex align-items-center">
      {children}
    </div>
  </div>
}

export default class Composite extends Component<CompositeProps, {}> {
  renderFeature = (feature: CompositeFeature | GenericExposedFeature) => {
    const { type, deviceState, device, onChange } = this.props;
    const genericParams = { key: JSON.stringify(feature), device, deviceState, onChange };
    const wrapperParams = { key: JSON.stringify(feature), feature };

    if (isBinaryFeature(feature)) {
      return <FeatureWrapper {...wrapperParams}>
        <Binary feature={feature} {...genericParams} />
      </FeatureWrapper>
    } else if (isNumericFeature(feature)) {
      return <FeatureWrapper {...wrapperParams}>
        <Numeric feature={feature} {...genericParams}
          steps={stepsConfiguration[type]?.[feature.name]} />
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
