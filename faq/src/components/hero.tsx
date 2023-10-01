const hero = () => {
    return (
        <div>
            <p className='text-6xl font-bold'>Frequently asked Questions</p>
            <p>
                These are the most commmonly asked questions about abc UI and
                billing. Can't find what youre looking for?{" "}
                <span>Chat to our friendly team</span>!
            </p>

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
                        <div>
                            <button>Learn more</button>
                            <button>Book 30 minutes</button>
                        </div>
                    </div>
                    <div></div>
                </div>
            </section>
        </div>
    );
};

export default hero;
