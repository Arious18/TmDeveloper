    import { Routes, Route } from "react-router-dom";
    import Home from "./pages/Home.jsx";
    import BeginTest from "./components/BeginTest.jsx";
    import Test from "./LevelQuiz/test.jsx";
    import Results from "./LevelQuiz/results.jsx";
    import MainQuiz from "./QuizPage/MainQuiz.jsx";

    const AppRoutes = () => {
        return (
            <Routes>
                <Route path="/" element={<Home />} />
               <Route path="/begin-test" element={<BeginTest />} />
                <Route path="/test" element={<Test />} />
                <Route path="/results" element={<Results />} />
                <Route path="/MainQuiz" element={<MainQuiz />} />
            </Routes>
        );
    };

    export default AppRoutes;