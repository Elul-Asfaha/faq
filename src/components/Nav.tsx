import { HiMenuAlt4 } from "react-icons/hi";
import { PiStarFour } from "react-icons/pi";
type navType = {
    sideNavToggler: () => void;
};
const Nav = ({ sideNavToggler }: navType) => {
    return (
        <div className='flex font-semibold justify-between items-center px-5 py-4'>
            <div className='hidden md:flex items-center font-semibold gap-5'>
                <div className='flex gap-2 items-center text-2xl font-bold'>
                    <PiStarFour />
                </div>
                <div>Home</div>
                <div>Products</div>
                <div>Pricing</div>
                <div>Blog</div>
                <div>About us</div>
            </div>
            <div className='flex items-center font-semibold gap-2 md:hidden'>
                <div className='flex gap-2 items-center text-2xl font-bold'>
                    <PiStarFour />
                </div>
                <p>Abc ui</p>
            </div>
            <div className='hidden md:flex gap-5'>
                <button className='rounded-full py-1 px-3 border-black border-2 shadow-md'>
                    Log in
                </button>
                <button className='rounded-full text-white bg-black py-1 px-3 shadow-md'>
                    Get started
                </button>
            </div>
            <div className='flex items-center gap-1 text-3xl md:hidden'>
                <div onClick={() => sideNavToggler()}>
                    <HiMenuAlt4 />
                </div>
                <p className='text-lg font-semibold'>Menu</p>
            </div>
        </div>
    );
};

export default Nav;
