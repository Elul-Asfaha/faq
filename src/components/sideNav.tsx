import { AiOutlineArrowRight } from "react-icons/ai";

type sideNavType = {
    sideNavToggler: () => void;
    sideNavToggled: boolean;
};
const SideNav = ({ sideNavToggler, sideNavToggled }: sideNavType) => {
    return (
        <div
            className={`overflow-y-none flex justify-between absolute top-0 h-full ${
                sideNavToggled ? "right-0" : "right-[-100%]"
            } w-[100%] duration-500 ease-in-out shadow text-white`}
        >
            <div
                className='absolute top-0 bottom-0 left-0 right-0 z-30'
                onClick={() => sideNavToggler()}
            ></div>
            <div className='absolute right-0 h-full z-40 w-[80%]  p-5 bg-[#111826]'>
                <button
                    onClick={() => sideNavToggler()}
                    className='h-fit w-fit p-3 text-2xl'
                >
                    <AiOutlineArrowRight />
                </button>
                <div className='flex flex-col items-center font-semibold gap-5'>
                    <div>Home</div>
                    <div>Products</div>
                    <div>Pricing</div>
                    <div>Blog</div>
                    <div>About us</div>
                </div>
            </div>
        </div>
    );
};

export default SideNav;
