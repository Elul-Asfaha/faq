import Accordion from "./accordion";

const Hero = () => {
    return (
        <div className='flex flex-col items-center justify-center pt-6 md:pt-20'>
            <div className='max-w-[800px] flex flex-col items-center gap-1 text-center'>
                <p className='text-3xl md:text-5xl font-bold'>
                    Frequently asked Questions
                </p>
                <p className='text-center'>
                    These are the most commmonly asked questions about abc UI
                    and billing.{" "}
                </p>
                <p className='text-center'>
                    Can't find what youre looking for?{" "}
                    <span>Chat to our friendly team</span>!
                </p>
                <Accordion />
            </div>
            <section>
                <div className='grid grid-cols-2'>
                    <div>
                        <p className='text-3xl font-bold'>
                            Book a 1-on-1 onboarding
                        </p>
                        <p>
                            Get up and running as fast as possible with a
                            personalized onboarding call. We'll show you how
                            everything works and how you can get started with
                            abc UI.
                        </p>
                        <div className='flex gap-2'>
                            <button className='py-[6px] px-4 rounded-full border border-black'>
                                Learn more
                            </button>
                            <button className='py-[6px] px-4 rounded-full bg-black text-white'>
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
