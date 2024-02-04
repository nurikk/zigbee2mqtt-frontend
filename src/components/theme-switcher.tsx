import * as React from 'react';
import { useTranslation } from 'react-i18next';

import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export const ThemeSwitcher = (): JSX.Element => {
    const { t } = useTranslation(['navbar']);
    const getStoredTheme = () => localStorage.getItem('z2m-theme')
    const setStoredTheme = theme => localStorage.setItem('z2m-theme', theme)

    const getPreferredTheme = () => {
        const storedTheme = getStoredTheme()
        if (storedTheme) {
            return storedTheme
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }

    const setTheme = theme => {
        if (theme === 'auto') {
            document.documentElement.setAttribute('data-bs-theme', window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
        } else {
            document.documentElement.setAttribute('data-bs-theme', theme)
        }
    }

    setTheme(getPreferredTheme())
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        const storedTheme = getStoredTheme()
        if (storedTheme !== 'light' && storedTheme !== 'dark') {
            setTheme(getPreferredTheme())
        }
    })

    const updateTheme = (theme: string) => {
        setStoredTheme(theme)
        setTheme(getPreferredTheme())
        const icon = document.getElementById('theme-dropdown-icon')
        icon!.className = getCurrentThemeClass()
    }

    const getCurrentThemeClass = () => {
        const theme = getStoredTheme()
        let icon = 'fa-solid'
        switch (theme) {
            case 'light': { icon += ' fa-sun'; break }
            case 'dark': { icon += ' fa-moon'; break }
            default: { icon += ' fa-circle-half-stroke'; break }
        }
        return icon
    }

    return (
        <Dropdown as={ButtonGroup}>
            <Button variant={'outline-secondary'} className={'d-flex align-items-center'}>
                <i id={'theme-dropdown-icon'} className={getCurrentThemeClass()} style={{ margin: '0 1px', width: '16px' }}></i>
            </Button>
            <Dropdown.Toggle split={true} variant={'outline-secondary'} data-bs-reference={'parent'}>
                <span className={'visually-hidden'}>{t('toggle_dropdown')}</span>
            </Dropdown.Toggle>
            <Dropdown.Menu className={'my-1'}>
                <Dropdown.Item onClick={(e) => { updateTheme('light') }}>
                    <i className={'fa-solid fa-sun me-2'} style={{ width: '16px' }}></i>
                    <span>Light</span> {/* probably something like t('theme:light')*/}
                </Dropdown.Item>
                <Dropdown.Item onClick={(e) => { updateTheme('dark') }}>
                    <i className={'fa-solid fa-moon me-2'} style={{ width: '16px' }}></i>
                    <span>Dark</span> {/* probably something like t('theme:dark')*/}
                </Dropdown.Item>
                <Dropdown.Item onClick={(e) => { updateTheme('auto') }}>
                    <i className={'fa-solid fa-circle-half-stroke me-2'} style={{ width: '16px' }}></i>
                    <span>Auto</span> {/* probably something like t('theme:auto')*/}
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};
