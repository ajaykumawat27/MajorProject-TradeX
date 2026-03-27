function Team() {
  return (
    <div className="container">
        <div className="row mt-5">
            <h1 className="text-center">
                People
            </h1>
        </div>

        <div className="row mt-5 mx-5 text-muted fs-5" style={{ lineHeight: "1.8" }}>

            <div className="col-6 pt-5 text-center">
                <img src="media/images/nithinKamath.jpg" style={{borderRadius:"100%",width:"45%"}}/>
                <p className="fs-5 mt-5 mb-0 fw-medium" style={{fontSize:"16px"}}>Parth Indora</p>
                <p className="fw-medium" style={{fontSize:"16px"}}>Founder, CEO</p>
            </div>

            <div className="col-6 pt-5">
                <p className="fw-medium" style={{fontSize:"16px"}}>
                   Nithin bootstrapped and founded Tradex in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Tradex has changed the landscape of the Indian broking industry.
                </p>
                <p className="fw-medium" style={{fontSize:"16px"}}>
                    He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                </p>
                <p className="fw-medium" style={{fontSize:"16px"}}>
                    Playing basketball is his zen.
                </p>
                <p className="fw-medium" style={{fontSize:"16px"}}>
                    Connect on 
                    <a className="fw-medium" href="#" style={{textDecoration:"none",fontSize:"16px"}}> Homepage </a>
                    /<a className="fw-medium" href="#" style={{textDecoration:"none",fontSize:"16px"}}> TradingQnA </a>
                    /<a className="fw-medium" href="#" style={{textDecoration:"none",fontSize:"16px"}}> Twitter</a>
                </p>
            </div>   
        </div>
    </div>
  );
}

export default Team;