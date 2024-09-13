import Logo from '@/components/Logo';
import MenuList from '@/components/MenuList';
import MobileSidebar from '@/components/MobileSidebar';
import Navbar from '@/components/Navbar';
import RenderNews from '@/components/RenderNews';
import Image from 'next/image';

export default function Home() {
    return (
        <div className='w-full h-full '>
            {/* NAV */}
            <MobileSidebar />
            <div className='px-8 md:px-16 lg:px-32 xl:px-64 py-2 w-full h-10 '>
                <Navbar />
            </div>
            <div className='flex items-center justify-center flex-col px-8 md:px-16 lg:px-32 xl:px-64 w-full select-none'>
                <Logo />
                <div className='bg-gray-200 h-[1px] px-8 md:px-16 lg:px-32 xl:px-64 w-full' />
            </div>
            {/*  */}
            {/* MENUS */}
            <div className='hidden md:flex flex-col justify-center px-8 md:px-16 lg:px-32 xl:px-64  w-full'>
                <MenuList />
            </div>

            {/* MAIN CONTENT */}
            <div className='px-8 md:px-16 lg:px-32 xl:px-64 pb-2 w-full h-10 '>
                <RenderNews />
            </div>
        </div>
    );
}
