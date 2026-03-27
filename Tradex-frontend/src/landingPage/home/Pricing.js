function Pricing(){
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-4 mt-5">
                    <h1  className="fw-medium mb-3 fs-2" style={{fontWeight: 500,fontStyle: "normal",lineHeight: "36px",color: "rgb(66, 66, 66)"}}>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='' className='mx-5' style={{textDecoration:"none"}}>See pricing&nbsp;&nbsp;<i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
                <div className="col-2"></div>
                <div className="col-6">
                    <div className="row text-center">
                        <div className="col border p-3">
                            <img style={{ width: "50%" }} src='/media/images/pricing_zero.png' alt='Equity delivery pricing' />
                            <p>Free equity delivery and  <br/> direct mutual funds</p>
                        </div>
                        <div className="col border p-3">
                            <img style={{ width: "50%" }} src='/media/images/pricing_twenty.png' alt='Equity delivery pricing' />
                            <p>Intraday and Future &<br/> Options Trading</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default Pricing;