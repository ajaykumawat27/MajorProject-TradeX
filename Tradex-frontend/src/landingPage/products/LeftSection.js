function LeftSection({imageURL, productName,productDescription, tryDemo, learnMore, googlePlay, appStore}){
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-5 p-5">
                    <img src={imageURL}/>
                </div>
                <div className="col-2"></div>
                <div className="col-5 p-5 mt-5">
                    <h2 style={{color:"rgb(66,66,66)"}} className="mb-3">{productName}</h2>
                    <p>{productDescription}</p>
                    <div className="mb-4 fw-medium">
                        <a href={tryDemo} style={{textDecoration:"none"}} className="">Try Demo →</a>
                        <a href={learnMore} style={{marginLeft:"5rem",textDecoration:"none"}}>Learn More →</a>
                    </div>
                    <div>
                    <a href={googlePlay}><img src="media/images/googlePlayBadge.svg"/></a>
                    <a href={appStore} style={{marginLeft:"4rem"}}><img src="media/images/appStoreBadge.svg"/></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;