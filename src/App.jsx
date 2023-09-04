import { useState } from "react";
import "./App.css";
import Images from "./learn";
import Header from "./components";
import Test from "./Test";

function App() {
    const [count, setCount] = useState(0);
    const linksArray = ["Products", "Services", "Overview", "Contact us"];

    return (
        <>
            {/* <Header links={linksArray} /> */}
            <Test />
        </>
    );
}

export default App;
