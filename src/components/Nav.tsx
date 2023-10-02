import { HiMenuAlt4 } from "react-icons/hi";
import { PiStarFour } from "react-icons/pi";
const Nav = () => {
    return (
        <div className='flex font-semibold justify-between items-center px-5 py-4'>
            <div className='hidden md:flex items-center font-semibold gap-5'>
                <div className='flex gap-2 items-center text-2xl font-bold'>
                    <PiStarFour />
                    <p>Abc ui</p>
                </div>
                <div>Home</div>
                <div>Products</div>
                <div>Pricing</div>
                <div>Blog</div>
                <div>About us</div>
            </div>
            <div className='md:hidden'>Abc ui</div>
            <div className='hidden md:flex gap-5'>
                <div className='rounded-full py-1 px-3 border-black border-2'>
                    Log in
                </div>
                <div className='rounded-full text-white bg-black py-1 px-3'>
                    Get started
                </div>
            </div>
            <div className='flex items-center gap-1 text-3xl md:hidden'>
                <HiMenuAlt4 />
                <p className='text-lg font-semibold'>Menu</p>
            </div>
        </div>
    );
};

export default Nav;
