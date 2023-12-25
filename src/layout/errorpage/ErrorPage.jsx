import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h1 className="text-9xl font-bold text-gray-800 text-center mt-40">404</h1>
            <h2 className="text-5xl font-semibold text-gray-600 text-center mt-10">Page Not Found</h2>
            <div className="text-center mt-10 btn-primary">
            <Link to="/">
            <button className="btn text-xl font-semibold">Go Home</button>
            </Link>
            </div>
        </div>
    );
};

export default ErrorPage;