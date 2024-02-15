import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import AppLayout from "./AppLayout";
import ControlPage from "./ControlPage";
import GradeCard from "./GradeCard";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route path="/control" element=<ControlPage /> />
                    <Route path="/grade" element=<GradeCard /> />
                    <Route path="/pin" element=<div /> />
                    {/* <Route path="/statistics" element={<Statistics />} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
