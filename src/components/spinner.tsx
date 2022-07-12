import React, { FunctionComponent } from "react";

const Spinner: FunctionComponent = () => {
  return <div className="d-flex align-items-center">
    <span>Loading, please wait.</span>
    <div className="spinner-border me-2" />
  </div>
}
export default Spinner;
