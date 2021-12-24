import Header from './components/Header';
import {Hero} from './components/Hero';

import {Footer} from './components/Footer';
import {About} from './components/About';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
 
  return (
    <>
    <Router>
      <Header />
      <Switch>
          
  
          <Route exact path="/hero">
            <Hero />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route exact path="/work">
            <Work />
          </Route>
          <Route exact path="/contacts">
            <Contacts />
          </Route>
          
        </Switch>
      <Footer />
    </Router>
    </>
  );
}
 export default App;