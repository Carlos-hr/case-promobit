import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { API_KEY } from '../constants/urls';

const useRequestData = (url, initialState) => {
	const [ data, setData ] = useState(initialState);
	const getData = useCallback(
		() => {
			axios
				.get(url, { params: { api_key: API_KEY, language: 'pt-BR' } })
				.then((res) => {
					setData(res.data);
				})
				.catch((err) => {
					setData(false);
				});
		},
		[ url ]
	);

	useEffect(
		() => {
			getData();
		},
		[ getData, url ]
	);

	return { data, getData };
};

export default useRequestData;
