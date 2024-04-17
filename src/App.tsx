import { useState } from "react";
import { ProfileData } from "./utils/types";
import Card from "./Components/Card/Card";
import Form from "./Components/Form/Form";
import Detail from "./Components/Detail/Detail";
import "./App.css";

const INITIAL_PROFILE_DATA = {
	name: "The Octocat",
	handle: "@octocat",
	joined: "25 Jan 2011",
	bio: "This profile has no bio",
	repos: 8,
	followers: 3938,
	following: 9,
	location: "San Francisco",
	link: "https://github.blog",
	twitter: "Not Available",
	company: "@github",
};

const App = () => {
	const [profile, setProfile] = useState<ProfileData | null>(INITIAL_PROFILE_DATA);

	return (
		<body>
			<nav>
				<h1 className="logo">devfinder</h1>
				<h3 className="toggle">Light Dark</h3>
			</nav>
			<Form />
			<Card profileData={profile} />
			{/* <Detail label="following" detail="10" /> */}
		</body>
	);
};

export default App;
