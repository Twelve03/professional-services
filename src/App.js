import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppContainer } from "./Components/Styles/AppContainer.style";
import { GlobalStyles } from "./Components/Styles/GlobalStyles.style";
import Header from "./Components/Header";
import Home from "./Views/Home";

function App() {
  return (
    <Router>
      <AppContainer>
        <GlobalStyles />
        <Header></Header>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </AppContainer>
    </Router>
  );
}

export default App;
