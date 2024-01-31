import React from "react";

function NewsArticleComponent({title, text}) {
    return (
        <div className='news-article'>
            <h4>{title}</h4>
            <p>{text}</p>
        </div>
    )
}

export default NewsArticleComponent;