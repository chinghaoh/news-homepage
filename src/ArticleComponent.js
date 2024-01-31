import React from "react";


function ArticleComponent({image, tier, title, text}) {
    return (
        <article className='article-tier-container'>
            <img src={image} alt='retroPc'>
            </img>
            <div className='article-tier-text'>
              <h3>{tier}</h3>
              <h4>{title}</h4>
              <p>{text}</p>
              </div>
            </article>)
}

export default ArticleComponent;