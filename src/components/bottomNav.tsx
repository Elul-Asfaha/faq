import { BsTwitter, BsLinkedin } from "react-icons/bs";
import { PiStarFour } from "react-icons/pi";

const BottomNav = () => {
    return (
        <div className='grid md:grid-cols-2 px-5 md:px-16 pb-10'>
            <div className='flex flex-col gap-5 text-[#111826]'>
                <div className='flex gap-2 items-center text-2xl font-bold'>
                    <div>
                        <PiStarFour />
                    </div>
                    <p className='font-bold text-2xl'>ABC UI</p>
                </div>
                <div className='flex gap-2 text-2xl'>
                    <div className='shadow-md p-2 rounded-md w-fit'>
                        <BsTwitter />
                    </div>
                    <div className='shadow-md p-2 rounded-md w-fit'>
                        <BsLinkedin />
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-3 pt-5 md:pt-0'>
                <div>
                    <ul className='list-none flex flex-col gap-3 text-[#111826]'>
                        <li className='text-gray-500 font-semibold'>Product</li>
                        <li className='font-semibold text-lg'>Overview</li>
                        <li className='font-semibold text-lg'>Features</li>
                        <li className='font-semibold text-lg'>Solutions</li>
                        <li className='font-semibold text-lg'>Tutorials</li>
                        <li className='font-semibold text-lg'>Pricing</li>
                        <li className='font-semibold text-lg'>Releases</li>
                    </ul>
                </div>
                <div>
                    {" "}
                    <ul className='list-none flex flex-col gap-3 text-[#111826]'>
                        <li className='text-gray-500 font-semibold'>Company</li>
                        <li className='font-semibold text-lg'>About us</li>
                        <li className='font-semibold text-lg'>Careers</li>
                        <li className='font-semibold text-lg'>Press</li>
                        <li className='font-semibold text-lg'>News</li>
                        <li className='font-semibold text-lg'>Media kit</li>
                        <li className='font-semibold text-lg'>Contact</li>
                    </ul>
                </div>
                <div>
                    {" "}
                    <ul className='list-none flex flex-col gap-3 text-[#111826]'>
                        <li className='text-gray-500 font-semibold'>
                            Resources
                        </li>
                        <li className='font-semibold text-lg'>Blog</li>
                        <li className='font-semibold text-lg'>Newsletter</li>
                        <li className='font-semibold text-lg'>Events</li>
                        <li className='font-semibold text-lg'>Help center</li>
                        <li className='font-semibold text-lg'>Tutorials</li>
                        <li className='font-semibold text-lg'>Support</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BottomNav;
