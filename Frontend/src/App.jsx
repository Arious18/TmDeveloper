import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import {ThemeProvider} from "./Chatbot/context.jsx";

function App() {
    return (
        <ThemeProvider>
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
