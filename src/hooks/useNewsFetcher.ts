import fetchNews from '@/api/useFetchNews';
import { useQuery } from '@tanstack/react-query';

// 일반 뉴스를 가져오는 훅
const useNewsFetcher = (category?: string, query?: string, page?: number, pageSize?: number) => {
    return useQuery({
        queryKey: category ? ['category', category, query, page, pageSize] : ['news', query, page, pageSize],
        queryFn: () => fetchNews(category, query, page, pageSize),
        staleTime: 1000 * 60 * 10,
        gcTime: 1000 * 60 * 60,
        select: (data) => ({
            articles: data.articles,
            totalResults: data.totalResults
        })
    });
};

export default useNewsFetcher;
