import React, { FunctionComponent } from 'react';

const Spinner: FunctionComponent = () => {
    return (
        <div className="d-flex align-items-center gap-2">
            <span className="mr-2">Loading, please wait.</span>
            <div className="spinner-border ml-2" />
        </div>
    );
};
export default Spinner;
