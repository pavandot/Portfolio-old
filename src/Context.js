import { createContext, useState } from "react";
export const themeContext = createContext();
const ThemeProvider = (props) => {
	const [transation, setTransation] = useState([]);
	function returnTransation() {
		return transation;
	}
	return <themeContext.Provider value={{ transation, setTransation, returnTransation }}>{props.children}</themeContext.Provider>;
};
export default ThemeProvider;
