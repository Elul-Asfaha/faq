import Accordion from "./accordion";
import {
    BsEmojiSmile,
    BsViewStacked,
    BsPersonPlus,
    BsWallet2,
    BsPlayCircle,
} from "react-icons/bs";

import { BiWallet } from "react-icons/bi";
import { MdMailOutline } from "react-icons/md";
import { TbMessage2Question } from "react-icons/tb";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import { PiStarFour } from "react-icons/pi";

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
    {
        title: "How does billing work?",
        description:
            "Yes, you can try us for free for 30 days. If you want we will provide you with a free 30-minute onboarding call to get you up and running. Book a call here.",
        icon: <BsWallet2 />,
    },
    {
        title: "How do i change my account email?",
        description:
            "Yes, you can try us for free for 30 days. If you want we will provide you with a free 30-minute onboarding call to get you up and running. Book a call here.",
        icon: <MdMailOutline />,
    },
    {
        title: "How does support work?",
        description:
            "Yes, you can try us for free for 30 days. If you want we will provide you with a free 30-minute onboarding call to get you up and running. Book a call here.",
        icon: <TbMessage2Question />,
    },
    {
        title: "Do you provide tutorials?",
        description:
            "Yes, you can try us for free for 30 days. If you want we will provide you with a free 30-minute onboarding call to get you up and running. Book a call here.",
        icon: <BsPlayCircle />,
    },
];
const Hero = () => {
    return (
        <div className='flex flex-col items-center justify-center px-16 pt-6 md:pt-20 px-15'>
            <div className='max-w-[800px] flex flex-col items-center gap-1 text-center'>
                <div className='text-3xl md:text-5xl mb-2 md:mb-5'>
                    <PiStarFour />
                </div>
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
                <button className='py-[6px] px-4 rounded-full shadow-md border-2 border-black mt-10'>
                    Load more
                </button>
            </div>
            <section className='py-10 px-5 w-screen md:w-auto'>
                <div className='grid md:grid-cols-2 items-center gap-10'>
                    <div className='flex flex-col justify-center md:max-w-[500px]'>
                        <p className='text-3xl font-bold pb-7 text-[#111826]'>
                            Book a 1-on-1 onboarding
                        </p>
                        <p className='font-semibold'>
                            Get up and running as fast as possible with a
                            personalized onboarding call. We'll show you how
                            everything works and how you can get started with
                            abc UI.
                        </p>
                        <div className='flex flex-col md:flex-row gap-2 pt-9'>
                            <button className='py-[6px] px-4 rounded-full shadow-md border-2 border-[#111826] hover:bg-[#111826] hover:text-white '>
                                Learn more
                            </button>
                            <button className='py-[6px] px-4 rounded-full shadow-md border-2 border-[#111826] bg-[#111826] text-white hover:text-[#111826] hover:bg-white'>
                                Book 30 minutes
                            </button>
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className='grid grid-cols-6 grid-rows-7 md:max-w-[500px] h-full gap-2'>
                            <div className='shadow-lg border col-span-2 row-span-2 row-start-1 md:row-start-2 col-start-2 flex'>
                                <img
                                    src={img1}
                                    alt=''
                                    className='object-cover'
                                />
                            </div>
                            <div className='shadow-lg border col-span-2 row-span-3 flex'>
                                <img
                                    src={img2}
                                    alt=''
                                    className='object-cover'
                                />
                            </div>
                            <div className='shadow-lg border col-span-2 col-start-2 md:col-start-3 row-span-3 flex'>
                                <img
                                    src={img5}
                                    alt=''
                                    className='object-cover'
                                />
                            </div>
                            <div className='shadow-lg border col-span-2 row-span-5 flex'>
                                <img
                                    src={img4}
                                    alt=''
                                    className='object-cover'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;
