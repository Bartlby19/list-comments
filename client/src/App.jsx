import React from "react";
import "./App.css"
import InputInformation from "./components/InputInformation/InputInformation";
import Comments from "./components/Comments/Comments";

class App extends React.Component {
  render() {
    return (
        <div className="wrapper-app">
            <InputInformation/>
            <Comments/>
        </div>
    )
  }
}
export default App;
