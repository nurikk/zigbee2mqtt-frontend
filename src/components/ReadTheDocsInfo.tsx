import React from 'react';
import { useTranslation } from 'react-i18next';

export const ReadTheDocsInfo = (props: { docsUrl: string }): JSX.Element => {
    const { docsUrl } = props;
    const { t } = useTranslation('common');
    return (
        <div className="card alert alert-info" role="alert">
            <div className="card-body">
                <i className="fa-solid fa-circle-info fa-2xl me-2"></i>

                <a href={docsUrl} target="_blank" rel="noreferrer" className="alert-link align-middle">
                    {t('read_the_docs_info')}
                </a>
            </div>
        </div>
    );
};
