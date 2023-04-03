
import Home from '../src/Pages/Home'
import Info from '../src/Pages/Info'
import { Countryloader } from '../src/Pages/Info';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { useState, createContext, useContext } from "react";
import { ThemeProvider } from "./Themes/ThemeProvider";
import { lightTheme, darkTheme } from "./Themes/ThemesStyles";



function App() {
    const [theme, setTheme] = useState(lightTheme);

    const toggleTheme = () => {
        setTheme(theme === lightTheme ? darkTheme : lightTheme);
    };

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home toggleTheme={toggleTheme}/>,
        },
        {
            path: "Info/:country",
            element: <Info />,
            loader: Countryloader,
        }
    ],
        {
            basename: "/Harri-Training-ReactJs",
        });
    
    


    return (
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;