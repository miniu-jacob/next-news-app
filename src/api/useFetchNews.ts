import axios from 'axios';

interface NewsSource {
    name: string;
}

interface NewsArticle {
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    source: NewsSource;
    publishedAt: string;
}

interface NewsResponse {
    articles: NewsArticle[];
    totalResults: number;
}

const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;

const fetchNews = async (
    category?: string,
    query?: string,
    page?: number,
    pageSize?: number
): Promise<NewsResponse> => {
    if (!API_KEY) {
        throw new Error('API Key is missing');
    }
    const url = new URL('https://newsapi.org/v2/top-headlines?');
    url.searchParams.append('country', 'us');

    // 카테고리 추가
    if (category) {
        url.searchParams.append('category', category);
    }

    // 검색어 추가
    if (query) {
        url.searchParams.append('q', query);
    }

    // 페이지와 페이지 크기를 쿼리 파라미터로 추가
    if (page) {
        url.searchParams.append('page', page.toString());
    }

    // 페이지 크기
    if (pageSize) {
        url.searchParams.append('pageSize', pageSize.toString());
    }

    url.searchParams.append('apiKey', API_KEY);

    const response = await axios.get(url.toString());
    console.log('response.data: ', response.data);
    return response.data;
};

export default fetchNews;
