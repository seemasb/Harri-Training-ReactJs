
import Home from '../src/Pages/Home'
import Info from '../src/Pages/Info'
import { Countryloader } from '../src/Pages/Info';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { useState, createContext, useContext, useEffect } from "react";
import { ThemeProvider } from "./Themes/ThemeProvider";
import { lightTheme, darkTheme } from "./Themes/ThemesStyles";



function App() {
    const [theme, setTheme] = useState(
        JSON.parse(localStorage.getItem('theme')) || lightTheme
    );

    const toggleTheme = () => {
        setTheme(theme === lightTheme ? darkTheme : lightTheme);
    };

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home toggleTheme={toggleTheme} />,
        },
        {
            path: "Info/:country",
            element: <Info toggleTheme={toggleTheme}/>,
            loader: Countryloader,
        }
    ],
        {
            basename: "/Harri-Training-ReactJs",
        });

    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(theme));
    }, [theme]);


    return (
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;