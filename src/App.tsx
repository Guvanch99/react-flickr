import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Main, Secondary, Error} from "./pages";

const App = () => {

  return (
    <Router>
      <Routes>
        <Route index element={<Main/>}/>
        <Route path='single-element' element={<Secondary/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </Router>
  )
}
export default App
