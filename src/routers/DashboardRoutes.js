import { Routes, Route, BrowserRouter } from "react-router-dom";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { DcScreen } from "../components/dc/DcScreen";
import { LoginScreen } from "../components/login/LoginScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { Navbar } from "../components/ui/Navbar";

export const DashboardRoutes = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<MarvelScreen />} />
                <Route path="/marvel" element={<MarvelScreen />} />
                <Route path="/dc" element={<DcScreen />} />
                <Route path="/search" element={<SearchScreen />} />
            </Routes>
        </BrowserRouter>
    );
}