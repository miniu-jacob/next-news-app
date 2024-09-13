'use client';
import useCategoryStore from '@/store/useCategoryStore';
import useMobileStore from '@/store/useMobileStore';
import { useState } from 'react';

const menus = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
const MobileSidebar = () => {
    const { isMobileOpen, toggleMobile } = useMobileStore();
    const { category, setCategory } = useCategoryStore();

    const handleMenuClick = (cat: string) => {
        setCategory(cat);
    };

    return (
        <div
            className={`w-64 h-full bg-black absolute ease-in-out duration-500 top-0 left-0
                flex flex-col justify-center items-center
            ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
        >
            <ul className='flex flex-col items-center justify-center gap-4 font-semibold text-xl'>
                {menus.map((cat, index) => (
                    <li
                        key={index}
                        onClick={() => handleMenuClick(cat)}
                        className={`text-white p-2 hover:bg-gray-600 rounded-md cursor-pointer
                            ${category === cat.toLocaleLowerCase() ? 'bg-gray-600 hover:cursor-default' : ''} `}
                    >
                        {cat}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MobileSidebar;
