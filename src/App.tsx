import Card from "./Components/Card/Card";
import Form from "./Components/Form/Form";
import "./App.css";

function App() {
	return (
		<body>
			<nav>
				<div className="logo">devfinder</div>
				<div className="toggle">Light Dark</div>
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
