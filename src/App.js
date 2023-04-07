import "./App.css";

import React, {useState} from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";


const App =()=> {
  const [mode, setMode] = useState('light');
  let apiKey=process.env.REACT_APP_NEWS_API;
  
  const [progress,setProgress]=useState(0);
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      // showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      //showAlert("Light mode has been enabled", "success");
    }
  }
  
    return (
      <div className="App">
        <Router>
          <LoadingBar color="#f11946" progress={progress} shadow={true}/>
          <NavBar mode={mode} toggleMode={toggleMode}/>
          <Routes>
            <Route
              exact
              path=""
              element={
                <News mode={mode}setProgress={setProgress} apiKey={apiKey} 
                  key="general"
                  pageSize={6}
                  country="in"
                  category="general"
                />
              }
            ></Route>
            <Route
              exact
              path="/general"
              element={
                <News mode={mode}setProgress={setProgress} apiKey={apiKey}
                  key="general"
                  pageSize={6}
                  country="in"
                  category="general"
                />
              }
            ></Route>
            <Route
              exact
              path="/business"
              element={
                <News mode={mode}setProgress={setProgress} apiKey={apiKey}
                  key="business"
                  pageSize={6}
                  country="in"
                  category="business"
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News mode={mode}setProgress={setProgress} apiKey={apiKey}
                  key="entertainment"
                  pageSize={6}
                  country="in"
                  category="entertainment"
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <News mode={mode}setProgress={setProgress} apiKey={apiKey}
                  key="health"
                  pageSize={6}
                  country="in"
                  category="health"
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <News mode={mode}setProgress={setProgress} apiKey={apiKey}
                  key="science"
                  pageSize={6}
                  country="in"
                  category="science"
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <News mode={mode}setProgress={setProgress} apiKey={apiKey}
                  key="sports"
                  pageSize={6}
                  country="in"
                  category="sports"
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News mode={mode}setProgress={setProgress} apiKey={apiKey}
                  key="technology"
                  pageSize={6}
                  country="in"
                  category="technology"
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  
}


export default App