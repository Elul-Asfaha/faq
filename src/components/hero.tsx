import Accordion from "./accordion";
import { BsEmojiSmile, BsViewStacked, BsPersonPlus } from "react-icons/bs";

import { BiWallet } from "react-icons/bi";
const accordionData = [
    {
        title: "Is there a free trial avaliable?",
        description:
            "Yes, you can try us for free for 30 days. If you want we will provide you with a free 30-minute onboarding call to get you up and running. Book a call here.",
        icon: <BsEmojiSmile />,
        start: true,
    },
    {
        title: "Can i change my plan later?",
        description:
            "Yes, you can try us for free for 30 days. If you want we will provide you with a free 30-minute onboarding call to get you up and running. Book a call here.",
        icon: <BsViewStacked />,
    },
    {
        title: "What is your cancellation policy?",
        description:
            "Yes, you can try us for free for 30 days. If you want we will provide you with a free 30-minute onboarding call to get you up and running. Book a call here.",
        icon: <BiWallet />,
    },
    {
        title: "Can other info be added to an invoice?",
        description:
            "Yes, you can try us for free for 30 days. If you want we will provide you with a free 30-minute onboarding call to get you up and running. Book a call here.",
        icon: <BsPersonPlus />,
    },
];
const Hero = () => {
    return (
        <div className='flex flex-col items-center justify-center px-16 pt-6 md:pt-20 px-15'>
            <div className='max-w-[800px] flex flex-col items-center gap-1 text-center'>
                <p className='text-3xl md:text-5xl font-bold'>
                    Frequently asked Questions
                </p>
                <p className='text-center pt-1'>
                    These are the most commmonly asked questions about abc UI
                    and billing.{" "}
                </p>
                <p className='text-center pb-5 md:pb-20'>
                    Can't find what youre looking for?{" "}
                    <span>Chat to our friendly team</span>!
                </p>
                {accordionData.map((items) => (
                    <Accordion
                        key={items.title}
                        title={items.title}
                        description={items.description}
                        icon={items.icon}
                        start={items.start}
                    />
                ))}
                <button className='py-[6px] px-4 rounded-full border-2 border-black'>
                    Load more
                </button>
            </div>
            <section className='py-10'>
                <div className='grid md:grid-cols-2'>
                    <div className=''>
                        <p className='text-3xl font-bold pb-7 text-[#111826]'>
                            Book a 1-on-1 onboarding
                        </p>
                        <p className='font-semibold'>
                            Get up and running as fast as possible with a
                            personalized onboarding call. We'll show you how
                            everything works and how you can get started with
                            abc UI.
                        </p>
                        <div className='flex gap-2 pt-9'>
                            <button className='py-[6px] px-4 rounded-full border-2 border-[#111826]'>
                                Learn more
                            </button>
                            <button className='py-[6px] px-4 rounded-full bg-[#111826] text-white'>
                                Book 30 minutes
                            </button>
                        </div>
                    </div>
                    <div></div>
                </div>
            </section>
        </div>
    );
};

export default Hero;
