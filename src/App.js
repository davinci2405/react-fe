import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Facebook } from "./pages/Facebook"

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Facebook />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
