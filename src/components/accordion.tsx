import { useState, ReactNode } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
type accordionType = {
    title: string;
    icon: ReactNode;
    description: string;
    start?: boolean;
};
const Accordion = ({
    title,
    icon,
    description,
    start = false,
}: accordionType) => {
    const [display, setDisplay] = useState(start);
    return (
        <div className='w-[350px] md:w-[600px] flex flex-col md:flex-row gap-1 md:gap-5'>
            <div className='h-fit w-fit shadow-md p-3 text-xl rounded-md'>
                {icon}
            </div>
            <div className='w-full'>
                <div className='flex justify-between items-center'>
                    <p className='font-bold  py-3'>{title}</p>
                    <button
                        onClick={() => {
                            setDisplay(!display);
                        }}
                        className='text-2xl'
                    >
                        {!display ? <BiChevronDown /> : <BiChevronUp />}
                    </button>
                </div>
                <p
                    className={`${
                        display ? "flex font-semibold text-left" : "hidden"
                    }`}
                >
                    {description}
                </p>
            </div>
        </div>
    );
};

export default Accordion;
