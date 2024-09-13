import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// const URL = 'http://localhost:5001/data';
const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;

export const fetchNews = async () => {
    const url = new URL(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
    const response = await axios.get(url.toString());
    console.log('API response: ', response);

    return response.data.articles;
    // return response;
};

const useNewsFetcher = () => {
    return useQuery({
        queryKey: ['news'],
        queryFn: fetchNews,
        staleTime: 1000 * 60 * 10,
        gcTime: 1000 * 60 * 60
    });
};

export default useNewsFetcher;
