import React from "react";

function MainArticleComponent({text}){

    return(
        <div className='main-article'>
              <p>{text}</p>
              <button className='main-article-button' >Read more</button>
            </div>
    )
}

export default MainArticleComponent;