import { useState } from "react";
import { ProfileData, ThemeType } from "./utils/types";
import Card from "./Components/Card/Card";
import Form from "./Components/Form/Form";
import Detail from "./Components/Detail/Detail";
import "./App.css";

const INITIAL_PROFILE_DATA = {
	avatar: "/Bitmap.svg",
	name: "The Octocat",
	handle: "@octocat",
	joined: "25 Jan 2011",
	bio: "This profile has no bio",
	repos: 8,
	followers: 3938,
	following: 9,
	"/icon-location.svg": "San Francisco",
	"/icon-twitter.svg": "Not Available",
	"/icon-website.svg": "https://github.blog",
	"/icon-company.svg": "@github",
};

const App = () => {
	const [profile, setProfile] = useState<ProfileData | null>(INITIAL_PROFILE_DATA);
	const [theme, setTheme] = useState<ThemeType>("dark");

	const handleThemeChange = () => {
		setTheme("light");
	};
	return (
		<body>
			<nav>
				<h1 className="logo">devfinder</h1>
				<div className="theme-toggle-container">
					<img
						className="theme-icon"
						src={`/icon-${theme === "light" ? "sun" : "moon"}.svg`}
						alt="search icon"
						onClick={handleThemeChange}
					/>
					<h3 className="toggle">{theme === "light" ? "Light" : "Dark"}</h3>
				</div>
			</nav>
			<Form setProfile={setProfile} />
			<Card profileData={profile} />
		</body>
	);
};

export default App;
