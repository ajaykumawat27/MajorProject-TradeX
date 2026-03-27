function Hero() {
  return (
    <div>
      <div>
        <div className="text-center" style={{ padding: "100px 0",marginBottom:"100px" }}>
          <h1 className="fs-2">Charges</h1>
          <p className="text-muted fs-4 fw-medium">List of all charges and taxes</p>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row text-center">
          <div className="col-4">
            <img src="media/images/pricing_zero.png" alt=""/>
            <h2 className="mb-4">Free equity delivery</h2>
            <p className="text-muted fw-medium">All equity delivery investments (NSE, BSE),<br/> are absolutely free — ₹ 0 brokerage.</p>
          </div>
          <div className="col-4">
            <img src="media/images/pricing_twenty.png" alt=""/>
            <h2 className="mb-4">Intraday and F&O trades</h2>
            <p className="text-muted fw-medium">Flat ₹ 20 or 0.03% (whichever is lower) per<br/> executed order on intraday trades across<br/> equity, currency, and commodity trades. Flat<br/> ₹20 on all option trades.</p>
          </div>
          <div className="col-4">
            <img src="media/images/pricing_zero.png" alt=""/>
            <h2 className="mb-4">Free direct MF</h2>
            <p className="text-muted fw-medium">All direct mutual fund investments are<br/> absolutely free — ₹ 0 commissions & DP<br/> charges.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;