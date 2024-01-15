import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import DisplayCard from "./Components/Cards/DisplayCard";

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
    )
}

export default AllRoutes;
