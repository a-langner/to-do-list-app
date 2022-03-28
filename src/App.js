import "./App.scss";
import Main from "./components/Main";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";


function App() {

    return (
        <div className="App">
            <Header />
            
            <BrowserRouter>
                <Routes>
                    {/* element={wenn !token="" dann Main, else Login}; und token global als state Speichern + im SeasonStorage oder Cookie */}
                    <Route path="/index" element={<Main />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<Navigate replace to="/index" />} />  
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
