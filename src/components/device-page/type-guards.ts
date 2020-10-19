
import { GenericExposedFeature, BinaryFeature, NumericFeature, EnumFeature } from "../../types";

export function isBinaryFeature(feature: GenericExposedFeature): feature is BinaryFeature {
  return feature.type === "binary";
}

export function isNumericFeature(feature: GenericExposedFeature): feature is NumericFeature {
  return feature.type === "numeric";
}

export function isEnumFeature(feature: GenericExposedFeature): feature is EnumFeature {
  return feature.type === "enum";
}