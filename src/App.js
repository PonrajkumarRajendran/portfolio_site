import Home from "./components/home/home.component";
import NavigationButton from "./components/navigation-button/navigation-button.component";
import NavigationContainer from "./components/navigation-container/navigation-container.component";
import About from "./components/about/about.component";
import Projects from "./components/projects/projects.component";
import Contact from "./components/contact/contact.component";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import { useState } from "react";
function App() {
  const [navigationClass, setNavigationClass] = useState("");
  const [navigationButtonClass, setNavigationButtonClass] = useState("");
  const navigationButtonClick = () => {
    console.log("entered");
    setNavigationClass("navigation-container-visible");
    setNavigationButtonClass("navigation-button-invisible");
  };
  const navigationCloseFunction = () => {
    setNavigationButtonClass("");
    setNavigationClass("");
  };
  return (
    <BrowserRouter>
      <div className="App">
        <NavigationContainer
          classValue={navigationClass}
          closeFunction={navigationCloseFunction}
        />
        <NavigationButton
          classValue={navigationButtonClass}
          clickFunction={navigationButtonClick}
        />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;
