import "./Form.css";

const Form = () => {
	return (
		<form className="container">
			<img className="icon" src="/icon-search.svg" alt="search icon" />
			<input type="text" />
			<button>Search</button>
		</form>
	);
};

export default Form;
