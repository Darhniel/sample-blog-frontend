import { formatISO9075 } from "date-fns";
import { Link } from 'react-router-dom';

export default function Post({_id, title, summary, image, createdAt, author}) {
    
    return (
        <div className="post">
            <div className="image">
                <Link to={`/post/${_id}`}>
                    <img src={`https://sample-blog-api.vercel.app/${image}`} alt="post" />
                </Link>
            </div>
            <div className="text">
                <Link to={`/post/${_id}`}>
                    <h2>{title}</h2>
                </Link>
                
                <p className="info">
                    <a href="/" className="author">{author.username}</a>
                    <time>
                        {formatISO9075(new Date(createdAt), 'dd MMM, yyyy HH:mm')}
                    </time>
                </p>
                
                <Link to={`/post/${_id}`}>
                    <p className='summary'>{summary}</p>
                </Link>
            </div>
        </div>
    )
}
