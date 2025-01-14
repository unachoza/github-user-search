import { useState, useEffect } from "react";

export const useAPI = (userName: string, fireSearch: boolean) => {
	const [data, setData] = useState<any>([]);
	const [error, setError] = useState<Boolean>(false);
	const [loading, setLoading] = useState<Boolean>(false);

	const normalizeProfiledata = (data: any) => ({
		avatar: data.avatar_url,
		name: data.name,
		joined: convertDate(data.created_at),
		handle: `@${data.login}`,
		bio: data.bio,
		repos: data.public_repos,
		followers: data.followers,
		following: data.following,
		"/icon-location.svg": data.location,
		"/icon-website.svg": data.blog,
		"/icon-twitter.svg": data.twitter_username,
		"/icon-company.svg": data.company,
	});

	const convertDate = (isoString: string) => {
		const date = new Date(isoString);

		const options = { year: "numeric", month: "long", day: "numeric" };
		const formattedDate = date.toLocaleDateString(undefined, options);

		return formattedDate;
	};

	useEffect(() => {
		const fetchUserData = async () => {
			try {
				const response = await fetch(`https://api.github.com/users/${userName}`);
				const userData = await response.json();
				console.log({ userData });
				const userDataObject = normalizeProfiledata(userData);
				setLoading(true);
				setData(userDataObject);
			} catch (e) {
				setError(true);
				console.log({ e });
			} finally {
				setLoading(false);
			}
		};
		fetchUserData();
	}, [userName, fireSearch]);

	return { data, error, loading };
};
