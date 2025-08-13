import "./post.css"

export default function post({children}){
    return(
        <div className="Post">
            {children}
        </div>
    );
}