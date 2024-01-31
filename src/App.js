import React from 'react';
import './App.css';
import './style.css';
import Header from './Header';
import imageWebDesktop from "./assets/images/image-web-3-desktop.jpg";
import imageRetroPc from "./assets/images/image-retro-pcs.jpg";
import imageTopLaptop from "./assets/images/image-top-laptops.jpg";
import imageGamingGrowth from "./assets/images/image-gaming-growth.jpg";

import ArticleComponent from './ArticleComponent';
import NewsArticleComponent from './NewsArticleComponent';
import MainArticleComponent from './MainArticleComponent';
function App() {
  return (

    <div>
      <head>
        <link href='https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap'>
        </link>
      </head>
      <Header>
      </Header>
      <main>
        <div className="container">
          <div className="wrapper">
            <img className='web3-image grid-col-span-2' src={imageWebDesktop} alt='desktopWeb3'>
            </img>
            <h2 className='main-article-title grid-col-start-1'>The Bright Future of Web 3.0?</h2>
            <MainArticleComponent text='We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?'></MainArticleComponent>
            <article className='news-article-container grid-col-start-3'>
              <h3 className='news-title'>New</h3>
              <div className='news-articles'>
                <NewsArticleComponent title='Hydrogen VS Electric Cars' text='Will hydrogen-fueled cars ever catch up to EVs?'></NewsArticleComponent>
                <NewsArticleComponent title='The Downsides of AI Artistry' text='What are the possible adverse effects of on-demand AI image generation?'></NewsArticleComponent>
                <NewsArticleComponent title='Is VC Funding Drying Up?' text='Private funding by VC firms is down 50% YOY. We take a look at what that means.'></NewsArticleComponent>
              </div>
            </article>
            <ArticleComponent image={imageRetroPc} tier='01'
              title='Reviving Retro PCs' text='What happens when old PCs are given modern upgrades?' ></ArticleComponent>
            <ArticleComponent image={imageTopLaptop} tier='02'
              title='Top 10 Laptops of 2022' text='Our best picks for various needs and budgets.' ></ArticleComponent>
            <ArticleComponent image={imageGamingGrowth} tier='03'
              title='The Growth of Gaming' text='How the pandemic has sparked fresh opportunities.' ></ArticleComponent>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
