import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import ScrollToTop from './components/ScrollToTop';
function App() {

	return (
		<>
			<Router>
				<Navigation />
				<ScrollToTop />
				<Switch>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/projects">
						<Projects />
					</Route>
					<Route path="/resume">
						<Resume />
					</Route>
					<Route path="/">
						<Redirect to="/about" />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</>
	);
}
export default App;