import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { tabs as settingsTabs } from '../settings-page/index';
import { NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export function SettingsDropdown() {
    const { t } = useTranslation(['settings']);

    return (
        <div className="btn-group text-nowrap">
            <NavDropdown title={<i className={'fa fa-cog'} />} id="navbarScrollingDropdown">
                <>
                    {settingsTabs.map((tab) => (
                        <NavDropdown.Item as={NavLink} key={tab.url} activeClassName={'active'} to={tab.url} >
                                {t(tab.translationKey)}
                        </NavDropdown.Item>
                    ))}
                </>
            </NavDropdown>
        </div>
    );
}
