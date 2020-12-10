import React from "react";

type DisplayValueProps = {
  value: unknown;
}

export function DisplayValue(props: DisplayValueProps) {
  const { value } = props;
  switch (typeof value) {
    case 'boolean':
      return <>{value ? 'true' : 'false'}</>;
    case "undefined":
      return <>N/A</>;
    case "object":
      return <>{value === null ? 'null' : JSON.stringify(value)}</>;
    case "string":
      return <>{value === "" ? <small className="text-muted">empty string</small> : value}</>;
    default:
      return <>{JSON.stringify(value)}</>;
  }
}