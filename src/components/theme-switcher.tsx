import * as React from 'react';

import { useThemeSwitcher } from "react-css-theme-switcher";
import Button from './button';
export type Theme = "light" | "dark";



type ThemeSwitcherProps = {
    saveCurrentTheme(theme: Theme): void;
}
export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
    const { saveCurrentTheme } = props;
    const { switcher, themes, status, currentTheme } = useThemeSwitcher();
    const isDarkMode = currentTheme === 'dark';

    if (status === 'loading') {
        return <div>Loading styles...</div>;
    }
    const toggleDarkMode = (light: boolean) => {
        const theme = light ? themes.light : themes.dark;
        saveCurrentTheme(theme as Theme);
        switcher({ theme });
    };
    return (
        <Button<boolean> item={isDarkMode} className="btn btn-info" onClick={toggleDarkMode}>{isDarkMode ? '🌑' : `🌞`}</Button>
    );
};
