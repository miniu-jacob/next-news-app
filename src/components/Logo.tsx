import Image from 'next/image';
const Logo = () => {
    return (
        <div className='max-w-[430px] mt-6 mb-2 min-w-[350px]'>
            <Image
                src={
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/NewYorkTimes.svg/1280px-NewYorkTimes.svg.png'
                }
                alt={''}
                width={500}
                height={250}
                className='object-contain w-[350px] md:w-[500px]'
            />
        </div>
    );
};

export default Logo;
