import "./Form.css";
import { Dispatch, SetStateAction, useState } from "react";
import { useAPI } from "../../hooks/useAPI";
import { ProfileData } from "../../utils/types";

interface FormProps {
	setProfile: Dispatch<SetStateAction<ProfileData | null>>
}

const Form = ({ setProfile }: FormProps) => {
	const [userName, setUserName] = useState("Octocat");
	const [fireSearch, setFireSearch] = useState(false);

	const { data, loading, error } = useAPI(userName, fireSearch);

	console.log({ data });
	const handleSearch = (e: any) => {
		e.preventDefault();
		setFireSearch(!fireSearch);
		setProfile(data);
	};

	return (
		<form className="container">
			<img className="icon" src="/icon-search.svg" alt="search icon" />
			<input placeholder="Search Github Username" type="search" onBlur={(e) => setUserName(e.target.value)} />
			<button onClick={(e) => handleSearch(e)} className="search-button">
				Search
			</button>
		</form>
	);
};

export default Form;
