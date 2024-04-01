import Card from "./Components/Card/Card";
import Form from "./Components/Form/Form";
import "./App.css";

function App() {
	return (
		<body>
			<nav>
				<h1 className="logo">devfinder</h1>
				<h3 className="toggle">Light Dark</h3>
			</nav>
			<Form />
			{/* <form action="">
				<input type="text" placeholder="Search GitHub username..." />
				<button>Search</button>
			</form> */}
			<Card />
		</body>
	);
}

export default App;
