function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5" style={{marginTop:"6rem"}}>
          <h2 style={{color:"rgb(66,66,66)"}}>{productName}</h2>
          <p>{productDesription}</p>
          <div>
            <a href={learnMore} className="fw-medium" style={{textDecoration:"none"}}>Learn More →</a>
          </div>
        </div>
        <div className="col-6">
          <img style={{width:"90%"}} src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;