import React from 'react';

export const ReadTheDocsInfo = (props: { docsUrl: string }): JSX.Element => {
    const { docsUrl } = props;
    return (
        <div className="card alert alert-info" role="alert">
            <div className="card-body">
                <i className="fa-solid fa-circle-info fa-2xl me-2"></i>

                <a href={docsUrl} target="_blank" rel="noreferrer" className="alert-link align-middle">
                    Read about this in the documentation…
                </a>
            </div>
        </div>
    );
};
