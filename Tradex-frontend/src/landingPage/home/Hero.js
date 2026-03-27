function Hero(){
    return(
        <div style={{marginTop:"8rem"}} className='container'>
            <div className='row text-center'>
                <div className='col-12'>
                    <img
                        src='media/images/HiUser.svg'
                        alt='Hero Image'
                        className='LandingPageHomeHeroImg mx-auto d-block img-fluid'
                        style={{ width: '100%', maxWidth: '800px' }}
                    />
                </div>
                <h2 className='mt-3 mt-md-5 mb-2 fs-4 fs-md-3 fs-lg-2'>Invest in everything</h2>
                <p className='mt-2 mb-3 mb-md-5 fs-6 fs-md-5'>
                    Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
                </p>
                <div className='d-flex justify-content-center'>
                    <button
                        className='btn btn-primary p-2 p-md-3 fw-medium mb-5 w-100 w-md-50 w-lg-25'
                        style={{ maxWidth: '200px', color: "white" }}
                    >
                        Sign up for free
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Hero;