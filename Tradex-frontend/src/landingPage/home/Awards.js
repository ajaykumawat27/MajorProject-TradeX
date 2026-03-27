function Awards(){
    return(
        <div className='container mt-5 mb-5 p-3 p-md-5'>
            <div className='row g-4'>
                <div className='col-12 col-md-6 d-flex align-items-center justify-content-center'>
                    <img src='media/images/largestBroker.svg' className='img-fluid' style={{maxWidth: "100%"}}/>
                </div>
                <div className='col-12 col-md-6 text-center text-md-start'>
                    <h1 className='mt-3 fs-3 fs-md-1'>Largest stock broker in India</h1>
                    <p className='fs-6'>2+ million Tradex clients contribute to over 15% of all retail order volumes in daily by trading and investing in:</p>
                    <div className='row g-3 justify-content-center justify-content-md-start'>
                        <ul className='col-12 col-sm-6 px-3 px-md-5 pt-3 pt-md-5 list-unstyled list-sm-unstyled list-md-unstyled'>
                            <li>
                                <p className="fw-medium">Futures and Options</p>
                            </li>
                            <li>
                                <p className="fw-medium">Stocks & IPOs</p>
                            </li>
                            <li>
                                <p className="fw-medium">Commodity derivatives</p>
                            </li>
                        </ul>
                        <ul className='col-12 col-sm-6 px-3 px-md-5 pt-3 pt-md-5 list-unstyled list-sm-unstyled list-md-unstyled'>
                            <li>
                                <p className="fw-medium">Direct mutual funds</p>
                            </li>
                            <li>
                                <p className="fw-medium">Currency derivatives</p>
                            </li>
                            <li>
                                <p className="fw-medium">Bonds and Govt. securities</p>
                            </li>
                        </ul>
                    </div>
                    <img src='media/images/pressLogos.png' className='img-fluid mt-4' style={{maxWidth:"90%"}}/>
                </div>
            </div>
        </div>
    );
}

export default Awards;