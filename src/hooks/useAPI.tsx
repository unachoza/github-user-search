import { useState, useEffect } from "react";
import { Octokit } from "octokit";

export const useAPI = (userName: string, fireSearch: boolean) => {
	const [data, setData] = useState<any>([]);
	const [error, setError] = useState<Boolean>(false);
	const [loading, setLoading] = useState<Boolean>(false);

	const normalizeProfiledata = (data: any) => ({
		name: data.name,
		handle: data.login,
		joined: convertDate(data.created_at),
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
				const octokit = new Octokit({ auth: "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" });
				const res = await octokit.rest.search.users({
					q: userName,
				});
				const userUrl = await res.data.items[0].url;
				const response = await fetch(userUrl);
				const userData = await response.json();
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
