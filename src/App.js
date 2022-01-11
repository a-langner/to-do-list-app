import "./App.scss";
import Main from './components/Main'
import Edit from "./components/Edit";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


function App() {

    return (
        <div className="App">
            <Header />
            
            <BrowserRouter>
                <Routes>
                    <Route path="/index" element={<Main />} />
                    <Route path="edit" element={<Edit />} />
                    <Route path="*" element={<Navigate replace to="/index" />} />  
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
