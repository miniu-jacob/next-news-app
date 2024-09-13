'use client';
import useNewsFetcher from '@/hooks/useNewsFetcher';
import useMobileStore from '@/store/useMobileStore';
import useSearchStore from '@/store/useSearchStore';
import { useState } from 'react';
import { MdOutlineSearch } from 'react-icons/md';

const Navbar = () => {
    const { isSearchOpen, toggleSearch } = useMobileStore();
    const { isMobileOpen, toggleMobile } = useMobileStore();
    const [searchValue, setSearchValue] = useState('');
    const { searchQuery, setSearchQuery } = useSearchStore();

    // 카테고리와 검색어를 기반으로 뉴스 데이터를 가져옴.

    const handleSearchResult = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && e.currentTarget.value.length) {
            console.log('입력값: ', e?.currentTarget.value);
            setSearchQuery(searchValue);
            setSearchValue('');
        }
    };

    const handleClick = () => {
        if (searchValue.length > 0) {
            console.log('쿼리함수 실행됨', searchValue);
            setSearchQuery(searchValue);
            // useNewsFetcher 훅을 불러옴.
            setSearchValue('');
        }
    };

    return (
        <div className='flex items-center justify-between'>
            <div className='cursor-pointer flex items-center gap-2'>
                <MdOutlineSearch className='w-8 h-8' onClick={toggleSearch} />
                {isSearchOpen && (
                    <div className='flex items-center gap-2'>
                        <input
                            type='text'
                            placeholder='키워드 뉴스 검색...'
                            className='text-sm font-medium ring-1 ring-gray-200 rounded-sm
                    box-border h-[28px] px-2 w-[180px] outline-gray-300 outline-1'
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            onKeyDown={handleSearchResult}
                        />
                        <button className='bg-purple-400 px-2 py-1 rounded-md' onClick={() => handleClick()}>
                            Go
                        </button>
                    </div>
                )}
            </div>
            <div className='flex flex-col gap-[4.5px] items-center cursor-pointer md:hidden p-2' onClick={toggleMobile}>
                <div
                    className={`w-6 h-1 rounded-sm origin-left ease-in-out duration-500 bg-blue-500 ${
                        isMobileOpen ? 'rotate-45' : ''
                    } `}
                />
                <div
                    className={`w-6 h-1 rounded-sm origin-left ease-in-out duration-500 bg-blue-500 ${
                        isMobileOpen ? 'opacity-0' : ''
                    } `}
                />
                <div
                    className={`w-6 h-1 rounded-sm origin-left ease-in-out duration-500 bg-blue-500 ${
                        isMobileOpen ? '-rotate-45' : ''
                    } `}
                />
            </div>
        </div>
    );
};

export default Navbar;
