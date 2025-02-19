import React, { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(true); // true for dark mode, false for light

    const toggleTheme = () => {
        setTheme(prevTheme => !prevTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custom hook to use theme context
export const useStateContext = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useStateContext must be used within a ThemeProvider");
    }
    return context;
};
