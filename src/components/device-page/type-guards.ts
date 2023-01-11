
import { GenericExposedFeature, BinaryFeature, NumericFeature, EnumFeature, LightFeature, CompositeFeature, SwitchFeature, CoverFeature, LockFeature, ColorFeature, TextualFeature, ClimateFeature, FanFeature, ListFeature, GradientFeature } from "../../types";

export function isBinaryFeature(feature: GenericExposedFeature | CompositeFeature): feature is BinaryFeature {
  return feature.type === "binary";
}

export function isListFeature(feature: GenericExposedFeature | CompositeFeature): feature is ListFeature {
  return feature.type === "list";
}

export function isNumericFeature(feature: GenericExposedFeature | CompositeFeature): feature is NumericFeature {
  return feature.type === "numeric";
}

export function isTextualFeature(feature: GenericExposedFeature | CompositeFeature): feature is TextualFeature {
  return feature.type === "text";
}

export function isEnumFeature(feature: GenericExposedFeature | CompositeFeature): feature is EnumFeature {
  return feature.type === "enum";
}

export function isLightFeature(feature: GenericExposedFeature | CompositeFeature): feature is LightFeature {
  return feature.type === "light";
}

export function isSwitchFeature(feature: GenericExposedFeature | CompositeFeature): feature is SwitchFeature {
  return feature.type === "switch";
}

export function isCoverFeature(feature: GenericExposedFeature | CompositeFeature): feature is CoverFeature {
  return feature.type === "cover";
}

export function isLockFeature(feature: GenericExposedFeature | CompositeFeature): feature is LockFeature {
  return feature.type === "lock";
}

export function isFanFeature(feature: GenericExposedFeature | CompositeFeature): feature is FanFeature {
    return feature.type === "fan";
  }

export function isCompositeFeature(feature: GenericExposedFeature | CompositeFeature): feature is CompositeFeature {
  return feature.type === "composite" && (feature.name !== "color_xy" && feature.name !== "color_hs");
}

export function isColorFeature(feature: GenericExposedFeature | CompositeFeature): feature is ColorFeature {
  return feature.type === "composite" && (feature.name === "color_xy" || feature.name === "color_hs");
}

export function isClimateFeature(feature: GenericExposedFeature | CompositeFeature): feature is ClimateFeature {
  return feature.type === "climate";
}

export function isGradientFeature(feature: GenericExposedFeature | CompositeFeature): feature is GradientFeature {
  return isListFeature(feature) && feature.name === "gradient" && feature.length_min !== undefined && feature.length_max !== undefined;
}
