import { useState, useEffect } from "react";
import axios from "axios";

export const useAPI = (url: string) => {
	const [data, setData] = useState<any>([]);
	const [error, setError] = useState<Boolean>(false);
	const [loading, setLoading] = useState<Boolean>(false);

	const fetchUserData = async () => {
		try {
			setLoading(true);
			const data = await axios.get(url);
			setData(data);
		} catch (e) {
			setError(true);
			console.log({ e });
		} finally {
			setLoading(false);
		}
	};

	return { data, error, loading, fetchUserData };
};
