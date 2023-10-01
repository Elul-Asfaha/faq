import { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
type accordionType = {
    title: string;
    icon: string;
    description: string;
};
const Accordion = ({ title, icon, description }: accordionType) => {
    const [display, setDisplay] = useState(false);
    return (
        <div className='w-[600px] flex gap-5'>
            <div className='h-fit border border-black p-2 rounded-md'>
                <BsEmojiSmile />
            </div>
            <div className='w-full'>
                <div className='flex justify-between items-center'>
                    <p className='font-bold  py-2'>
                        is there a free trial avaliable?
                    </p>
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
                    Yes, you can try us for free for 30 days. If you want we
                    will provide you with a free 30-minute onboarding call to
                    get you up and running. Book a call here.
                </p>
            </div>
        </div>
    );
};

export default Accordion;
