import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

function App() {

	return (
		<>
			<Router>
				<Navigation />
				<main>
					<Switch>
						<Route exact path="/">
							<Redirect to="/about" />
						</Route>
						<Route path="/about">
							<About />
						</Route>
						<Route path="/projects">
							<Projects />
						</Route>
						<Route path="/resume">
							<Resume />
						</Route>
					</Switch>
				</main>
				<Footer />
			</Router>
		</>
	);
}
export default App;