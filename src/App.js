import "./App.css";
import React, { Component } from "react";
import Nav from "./components/Nav";
import UserItem from "./components/UserItem";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Nav title="Github Finder" icon="fab fa-github" />
                <UserItem />
                <h1>hello</h1>
            </div>
        );
    }
}

export default App;
