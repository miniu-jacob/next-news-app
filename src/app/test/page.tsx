const Test = () => {
    return (
        <nav className='flex space-x-10 m-12'>
            <div className='group'>
                <span className='text-lg font-medium text-gray-800'>Home</span>
                <div className='group-item-underline h-[3px] bg-gray-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left'></div>
            </div>
            <div className='group'>
                <span className='text-lg font-medium text-gray-800'>About</span>
                <div className='group-item-underline h-[3px] bg-gray-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-500'></div>
            </div>
            <div className='group'>
                <span className='text-lg font-medium text-gray-800'>Services</span>
                <div className='group-item-underline h-[3px] bg-gray-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-500'></div>
            </div>
            <div className='group'>
                <span className='text-lg font-medium text-gray-800'>Contact</span>
                <div className='group-item-underline h-[3px] bg-gray-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-500'></div>
            </div>
        </nav>
    );
};

export default Test;
