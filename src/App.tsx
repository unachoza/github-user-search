import { useState } from "react";
import { ProfileData } from "./utils/types";
import Card from "./Components/Card/Card";
import Form from "./Components/Form/Form";
import Detail from "./Components/Detail/Detail";
import "./App.css";

const ProfileDataResult = {
	name: "",
	handle: "",
	joined: "",
	bio: "",
	repos: 10,
	followers: 10,
	following: 10,
	location: "san francisco",
	link: "https:arianna.dev",
	twitter: "",
	company: "",
};

const App = () => {
	const [profile, setProfile] = useState<ProfileData | null>(null);

	return (
		<body>
			<nav>
				<h1 className="logo">devfinder</h1>
				<h3 className="toggle">Light Dark</h3>
			</nav>
			<Form />
			<Card />
			<Detail label="following" detail="10" />
		</body>
	);
};

export default App;
