'use client';

import useCategoryStore from '@/store/useCategoryStore';
import { LoadingSpinner } from './LoadingSpinner';
import Image from 'next/image';
import useNewsFetcher from '@/hooks/useNewsFetcher';
import useSearchStore from '@/store/useSearchStore';
import PaginationPage from './PaginationPage';
import usePaginationStore from '@/store/usePaginationStore';
import { useEffect } from 'react';

interface News {
    title: string;
    description: string;
    source: {
        name: string;
    };
    publishedAt: string;
    urlToImage: string | null;
}

const RenderNews = () => {
    const category = useCategoryStore((state) => state.category);
    const searchQuery = useSearchStore((state) => state.searchQuery);

    // 페이지 상태와 pageSize, totalResults 상태를 스토어에서 가져온다.
    // 페이지네이션을 위해 필요하다.
    const { page, pageSize, setTotalResults } = usePaginationStore();

    const {
        data: newsListData,
        error,
        isError,
        isLoading,
        isFetching
    } = useNewsFetcher(category === 'general' ? undefined : category, searchQuery, page, pageSize);

    console.log('newsList: ', newsListData);

    // const fetcher = category === 'general' ? useNewsFetcher : () => useCategoryNewsFetcher(category);

    // const { data: newsList, error, isError, isLoading, isFetching } = fetcher();

    // 뉴스 목록과 totalResult를 가져온다.
    const newsList = newsListData?.articles;
    const totalResults = newsListData?.totalResults;

    useEffect(() => {
        if (totalResults !== undefined) {
            setTotalResults(totalResults);
        }
    }, [totalResults, setTotalResults]);

    // totalResults를 상태로 설정한다.

    if (isLoading)
        return (
            <div className='flex justify-center text-center items-center'>
                <LoadingSpinner size={48} className='text-blue-700' />
            </div>
        );

    if (isFetching) {
        return <div>Fetching Data is being used</div>;
    }

    return (
        <div className=''>
            {newsList?.map((news: News, index: number) => (
                <div className='' key={index}>
                    <div className='flex flex-col md:flex-row gap-4 mt-2'>
                        {news.urlToImage ? (
                            <Image
                                src={news.urlToImage || ''}
                                alt={''}
                                width={550}
                                height={140}
                                className='rounded-lg md:w-[300px] lg:w-[250px] object-cover'
                            />
                        ) : (
                            <div
                                className='bg-gray-200 rounded-lg md:max-w-[300px] lg:max-w-[250px] '
                                style={{ width: 550, height: 140 }}
                            ></div>
                        )}
                        <div className='flex flex-col gap-2'>
                            <h1 className='font-semibold text-gray-800 text-xl'>{news.title}</h1>
                            <p className='text-gray-600 text-sm'>{news.description}</p>
                            <div className='flex items-center gap-2 '>
                                <span className='text-gray-600 font-medium text-sm'>{news.source.name}</span>
                                <span className='text-gray-600 font-medium text-sm'>{news.publishedAt}</span>
                            </div>
                        </div>
                    </div>
                    <div className='h-[1px] w-full  bg-gray-400 mt-2'></div>
                </div>
            ))}
            <PaginationPage />
        </div>
    );
};

export default RenderNews;
