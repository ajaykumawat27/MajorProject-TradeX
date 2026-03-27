import { Link } from "react-router-dom";
function NotFoundPage(){
    return(
        <div style={{marginTop:"15rem",marginBottom:"15rem"}} className='container'>
            <div className='row text-center'>
                <i style={{color:"red"}} class="fa-solid fa-triangle-exclamation fs-2"></i>
                <h1 style={{color:"red"}}>404</h1>
                <h1>Page Not Found!</h1>
                <p>Sorry,the page you are looking for does not exist <Link to={"/"}  class="text-decoration-none">Go to home Page</Link></p>
            </div>
        </div>
    );
}
export default NotFoundPage;