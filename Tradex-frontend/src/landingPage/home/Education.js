function Awards(){
    return(
        <div className='container mt-5 p-3 p-md-5'>
            <div className='row'>
                <div className='col-12 col-md-6 d-flex align-items-center justify-content-center'>
                    <img  style={{ width: "70%" }}  src='media/images/education.svg' className="img-fluid"/>
                </div>
                <div className='col-12 col-md-6'>
                   <h1 className="mb-3 fs-3 fs-md-2 mt-5" style={{color:"rgb(66,66,66)"}}>Free and open market education</h1>
                    <p className="fs-6 fs-md-5">Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='' style={{textDecoration:"none", fontWeight:"500", lineHeight:"27px", fontSize:"18px"}}>Varsity&nbsp;&nbsp;<i className="fa-solid fa-arrow-right-long mb-4"></i></a>

                    <p className="fs-6 fs-md-5">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='' style={{textDecoration:"none", fontWeight:"500", lineHeight:"27px", fontSize:"18px"}}>Trading Q&A&nbsp;&nbsp;<i className="fa-solid fa-arrow-right-long mb-4"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Awards;