const Nav = () => {
    return (
        <div className='flex font-semibold justify-between items-center px-5 py-2'>
            <div className='flex items-center gap-5'>
                <div>Logo</div>
                <div>Home</div>
                <div>Products</div>
                <div>Pricing</div>
                <div>Blog</div>
                <div>About us</div>
            </div>
            <div className='flex gap-5'>
                <div className='rounded-full py-1 px-3'>Log in</div>
                <div className='rounded-full text-white bg-black py-1 px-3'>
                    Get started
                </div>
            </div>
        </div>
    );
};

export default Nav;
