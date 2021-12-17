import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {ThemeProvider} from "styled-components"
import {Main, Secondary, Error} from "./pages";
import {theme} from "./styles/Theme.styled";
import {GlobalStyles} from "./styles/Global.styled";

import { rootSaga } from './store/rootSaga'
import { sagaMiddleware } from './store/store'

const App = () => {
  sagaMiddleware.run(rootSaga)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Router>
        <Routes>
          <Route index element={<Main/>}/>
          <Route path='single-element' element={<Secondary/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </Router>
    </ThemeProvider>
  )
}
export default App
