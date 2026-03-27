import React from 'react';
function Stats(){
    return(
        <div className='container m-6'>
            <div className='row p-3 p-md-5'>
                <div className='col-12 col-md-6 p-2'>
                    <h2 style={{opacity:"0.85"}} className='mb-3 mb-md-5 fs-4 fs-md-3'>Trust with confidence</h2>

                    <h3 style={{opacity:"0.9"}} className='fs-5 fs-md-4'>Customer-first always</h3>
                    <p className='text-muted fs-6 fs-md-5'>That's why 1.6+ crore customers trust Tradex with ~ ₹6 lakh crores of equity investments, making us India's largest broker; contributing to 15% of daily retail exchange volumes in India.</p>

                    <h3 style={{opacity:"0.9"}} className='fs-5 fs-md-4'>No spam or gimmicks</h3>
                    <p className='text-muted fs-6 fs-md-5'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    
                    <h3 style={{opacity:"0.9"}} className='fs-5 fs-md-4'>The TradeX universe</h3>
                    <p className='text-muted fs-6 fs-md-5'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    <h3 style={{opacity:"0.9"}} className='fs-5 fs-md-4'>Do better with money</h3>
                    <p className='text-muted fs-6 fs-md-5'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-12 col-md-6 p-2 text-center text-md-start'>
                    <img src='media/images/ecosystem.png' style={{width:"100%", maxWidth:"400px"}} className='img-fluid'/>
                    <div className='text-center mx-2 p-3 p-md-5'>
                        <a href='' style={{textDecoration:"none"}} className='d-block d-md-inline-block mb-3 mb-md-0'>Explore our products&nbsp;&nbsp;<i className="fa-solid fa-arrow-right-long mx-2"></i></a>
                        <a href='' style={{textDecoration:"none"}} className='d-block d-md-inline-block'>Try TradeX demo&nbsp;&nbsp;<i className="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Stats;