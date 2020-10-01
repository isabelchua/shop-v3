import React from "react";

import "./App.css";
import { Container } from "react-bootstrap";
import Footer from "./Footer";
import Header from "./Header";

function App() {
	return (
		<div className="App">
			<Header />
			<main className="py-3">
				<Container>
					<h1>welcome to shop</h1>
				</Container>
			</main>
			<Footer />
		</div>
	);
}

export default App;
