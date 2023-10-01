import { useState, ReactNode } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
type accordionType = {
    title: string;
    icon: ReactNode;
    description: string;
};
const Accordion = ({ title, icon, description }: accordionType) => {
    const [display, setDisplay] = useState(false);
    return (
        <div className='w-[350px] md:w-[600px] flex gap-5'>
            <div className='h-fit border border-black p-2 rounded-md'>
                {icon}
            </div>
            <div className='w-full'>
                <div className='flex justify-between items-center'>
                    <p className='font-bold  py-2'>{title}</p>
                    <button
                        onClick={() => {
                            setDisplay(!display);
                        }}
                        className='text-2xl'
                    >
                        {!display ? <AiOutlineDown /> : <AiOutlineUp />}
                    </button>
                </div>
                <p
                    className={`${
                        display
                            ? "flex ease-in-out duration-500 text-left"
                            : "hidden"
                    }`}
                >
                    {description}
                </p>
            </div>
        </div>
    );
};

export default Accordion;
