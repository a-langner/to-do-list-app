import './App.scss';
import Header from "./components/Header";
import InputArea from "./components/InputArea";
import OpenTaskArea from "./components/OpenTaskArea";
import FinishedTaskArea from "./components/FinishedTaskArea";


function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <InputArea />
                <OpenTaskArea />
                <FinishedTaskArea />
            </main>
        </div>
    );
}

export default App;
