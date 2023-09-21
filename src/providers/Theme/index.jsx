import { ThemeProvider } from '@emotion/react';
import { CssBaseline, createTheme } from '@mui/material';
import { blue, indigo } from '@mui/material/colors';
import React, { createContext, useCallback, useContext, useState } from 'react'
import useLocalStorage from '../../hooks/localstorage/useLocalStorage';

const AppThemeContext = createContext(null)
const themes = {
    light: createTheme({
        palette: {
            mode: "light",
            primary: indigo,
            secondary: blue,
        },
    }),
    dark: createTheme({
        palette: {
            mode: "dark",
            primary: indigo,
            secondary: blue,
        },
    }),
};

const themeKey = "loop_app_theme"
const AppThemeProvider = (props) => {
    const userPreferredTheme = useLocalStorage({ fallback: "light", key: themeKey })
    const toggleTheme = useCallback(() => {
        if (userPreferredTheme.value === "light") {
            userPreferredTheme.setItem(themeKey, "dark");
            return;
        }
        userPreferredTheme.setItem(themeKey, "light");
    }, [userPreferredTheme.value])
    return (
        <AppThemeContext.Provider value={{ theme: userPreferredTheme.value, toggleTheme }}>
            <ThemeProvider theme={themes[userPreferredTheme.value]}>
                <CssBaseline />
                {props.children}
            </ThemeProvider>
        </AppThemeContext.Provider>
    )
}

export const useAppTheme = () => useContext(AppThemeContext);

export default AppThemeProvider