function OpenAccount(){
    return(
        <div style={{marginTop:"3rem"}} className='container'>
            <div className='row text-center'>
                <h1 className=' mt-2 mb-2 fs-4 fs-md-3 fs-lg-2'>Open a Tradex account</h1>
                <p className='mt-4 mb-2 mb-md-5 fs-6 fs-md-5'>
                   Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
                </p>
                <div className='d-flex justify-content-center'>
                    <button
                        className='btn btn-primary p-2 p-md-3 fw-medium mb-5 w-100 w-md-50 w-lg-25'
                        style={{ maxWidth: '200px', color: "white" }}>
                        Sign up for free
                    </button>
                </div>
            </div>
        </div>
    );
}
export default OpenAccount;