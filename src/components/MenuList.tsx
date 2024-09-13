'use client';

import useCategoryStore from '@/store/useCategoryStore';

const menus = ['Business', 'Entertainment', 'General', 'Health', 'Science', 'Sports', 'Technology'];

const MenuList = () => {
    // const category = useCategoryStore((state) => state.category);
    // const setCategory = useCategoryStore((state) => state.setCategory);
    const { setCategory } = useCategoryStore();
    const handleClick = (item: string) => {
        const checkedItem = item.toLowerCase();
        console.log('item', checkedItem);
        setCategory(item);
        // console.log('Store Category: ', category);
    };
    return (
        <>
            <ul className='flex items-center gap-4 flex-wrap p-2 justify-center'>
                {menus.map((item, index) => (
                    <button
                        key={index}
                        className='px-2 py-1 rounded-md cursor-pointer hover:bg-gray-200'
                        onClick={() => handleClick(item)}
                    >
                        {item}
                    </button>
                ))}
            </ul>
            <div className=' w-full border-t-[2px] border-black border-double '></div>
        </>
    );
};

export default MenuList;
