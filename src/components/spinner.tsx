import React, { FunctionComponent } from "react";

const Spinner: FunctionComponent = () => {
  return <div className="d-flex align-items-center">
    <strong>Loading, please wait.</strong>
    <div className="spinner-border me-2" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
}
export default Spinner;