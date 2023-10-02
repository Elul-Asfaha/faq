import { BsTwitter, BsLinkedin } from "react-icons/bs";
const BottomNav = () => {
    return (
        <div className='grid grid-cols-2 px-16'>
            <div className='flex flex-col gap-5'>
                <div className='flex items-center gap-2'>
                    <div>icon</div>
                    <p className='font-bold text-2xl'>ABC UI</p>
                </div>
                <div className='flex gap-2'>
                    <div className='shadow-md p-2 rounded-md w-fit'>
                        <BsTwitter />
                    </div>
                    <div className='shadow-md p-2 rounded-md w-fit'>
                        <BsLinkedin />
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-3'>
                <div>
                    <ul className='list-none flex flex-col gap-3'>
                        <li className='text-gray-500 font-semibold'>Product</li>
                        <li className='font-semibold text-lg'>Overview</li>
                        <li className='font-semibold text-lg'>Overview</li>
                        <li className='font-semibold text-lg'>Overview</li>
                        <li className='font-semibold text-lg'>Overview</li>
                        <li className='font-semibold text-lg'>Overview</li>
                        <li className='font-semibold text-lg'>Overview</li>
                    </ul>
                </div>
                <div>
                    {" "}
                    <ul className='list-none flex flex-col gap-3'>
                        <li className='text-gray-500 font-semibold'>Company</li>
                        <li className='font-semibold text-lg'>Overview</li>
                        <li className='font-semibold text-lg'>Overview</li>
                        <li className='font-semibold text-lg'>Overview</li>
                        <li className='font-semibold text-lg'>Overview</li>
                        <li className='font-semibold text-lg'>Overview</li>
                        <li className='font-semibold text-lg'>Overview</li>
                    </ul>
                </div>
                <div>
                    {" "}
                    <ul className='list-none flex flex-col gap-3'>
                        <li className='text-gray-500 font-semibold'>
                            Resources
                        </li>
                        <li className='font-semibold text-lg'>Overview</li>
                        <li className='font-semibold text-lg'>Overview</li>
                        <li className='font-semibold text-lg'>Overview</li>
                        <li className='font-semibold text-lg'>Overview</li>
                        <li className='font-semibold text-lg'>Overview</li>
                        <li className='font-semibold text-lg'>Overview</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BottomNav;
