import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import "./theme/darkMode.scss"
import { productInputs, userInputs } from "./formSource";
import { DarkModeContext} from "./context/darkModeContext";
import { useContext } from "react";

function App() {

  //const [darkmode, setDarkmode] = useState(false)
  //use context instead of useState

  const { darkMode }= useContext(DarkModeContext) 

  return (
    <div className={darkMode ? "app darkMode" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />

            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New inputs ={userInputs} title="Add New User" />}  /> 
            </Route>

            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New inputs={productInputs} title="Add New Product" />}  /> 
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
