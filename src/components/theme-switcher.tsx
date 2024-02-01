import * as React from 'react';

import Dropdown from 'react-bootstrap/Dropdown';

export const ThemeSwitcher = (): JSX.Element => {
    const getStoredTheme = () => localStorage.getItem('theme')
    const setStoredTheme = theme => localStorage.setItem('theme', theme)

    const getPreferredTheme = () => {
        const storedTheme = getStoredTheme()
        if (storedTheme) {
            return storedTheme
        }

        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }

    const setTheme = theme => {
        if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.setAttribute('data-bs-theme', 'dark')
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
        const icon = document.getElementById("theme-dropdown-icon")
        icon!.className = getCurrentThemeClass()
    }

    const getCurrentThemeClass = () => {
        const theme = getStoredTheme()
        let icon = "fa-solid me-1"
        switch (theme) {
            case 'light': { icon += " fa-sun"; break }
            case 'dark': { icon += " fa-moon"; break }
            default: { icon += " fa-circle-half-stroke"; break }
        }
        return icon
    }

    return (
        <Dropdown className={'my-2 ms-1'}>
            <Dropdown.Toggle variant='outline-secondary' >
                <i id="theme-dropdown-icon" className={getCurrentThemeClass()} style={{ width: '16px' }}></i>
            </Dropdown.Toggle>
            <Dropdown.Menu className={'my-1'}>
                <Dropdown.Item onClick={(e) => { updateTheme('light') }}>
                    <i className={"fa-solid fa-sun me-2"} style={{ width: '16px' }}></i>
                    <span className="">Light</span> {/* probably something like t('theme:light')*/}
                </Dropdown.Item>
                <Dropdown.Item onClick={(e) => { updateTheme('dark') }}>
                    <i className={"fa-solid fa-moon me-2"} style={{ width: '16px' }}></i>
                    <span className="">Dark</span> {/* probably something like t('theme:dark')*/}
                </Dropdown.Item>
                <Dropdown.Item onClick={(e) => { updateTheme('auto') }}>
                    <i className={"fa-solid fa-circle-half-stroke me-2"} style={{ width: '16px' }}></i>
                    <span className="">Auto</span> {/* probably something like t('theme:auto')*/}
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};
