import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

function App() {
    return (
        <div className="App">
            <Header />
            <div className="main">
                <Main />
            </div>
            <Footer />
        </div>
    );
}

export default App;
