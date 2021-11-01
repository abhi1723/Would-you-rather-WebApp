import { Link } from "react-router-dom"

export default function PageNotFound(){
    return (
        <div>
        Page Not Found.
        <Link to ="/questions">Go Back</Link>
        </div>
    )
}