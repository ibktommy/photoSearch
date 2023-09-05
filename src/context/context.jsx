import { useEffect } from "react";
import { useState, useContext, createContext } from "react";

const AppContext = createContext();

// Getting Initial Dark Mode
const getInitialDarkMode = () => {
  const storedDarkMode = localStorage.getItem('darkTheme') === 'true'
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return storedDarkMode || prefersDarkMode
}
// ************************ //

export const AppContextProvider = ({ children }) => {
	// DarkTheme Functionality
	const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());
	const toggleTheme = () => {
		const newDarkTheme = !isDarkTheme;
		setIsDarkTheme(newDarkTheme);
    localStorage.setItem('darkTheme', newDarkTheme)
	};

	useEffect(() => {
		document.body.classList.toggle("dark-theme", isDarkTheme);
	}, [isDarkTheme]);
	// ************************ //

	// SearchTerm State
	const [searchTerm, setSearchTerm] = useState("cat");

	return (
		<AppContext.Provider
			value={{ isDarkTheme, toggleTheme, searchTerm, setSearchTerm }}
		>
			{children}
		</AppContext.Provider>
	);
};


// Custom Hook
export function useGlobalContext() {
  return useContext(AppContext);
}
