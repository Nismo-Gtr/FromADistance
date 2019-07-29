import React, { useState, useEffect } from 'react';
import '../Body/Body.css';
import axios from 'axios';
import Landing from '../Landing/Landing';
import image from '../../assets/business.jpg';
import Footer from '../Footer/Footer';

export default function Biz() {

    const [news, updateNews] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('https://newsapi.org/v2/' +
                'top-headlines?' +
                'country=us&' +
                'category=business&' +
                'apiKey=' +
                process.env.REACT_APP_API_KEY)
                updateNews(response.data.articles)
            }
            fetchData();
        },
        []
        )

    return (
        <div>
            <Landing img={image} category='Business' />
            <h1 id={'headlines'}>Business</h1>
            <div id={'wrapper'}>
                {news === undefined ? '' : news.map(({ title, urlToImage, author, description, publishedAt, url }) => ( 
                    <div key={url} id={''} className={'articlePreview'}>
                        {/* {console.log('')} */}
                        <a href={url}>
                            <h1 id={'title'}>{title}</h1>
                            <img src={urlToImage} alt={''}></img>
                            <p>{publishedAt.substr(8, 2) + " " + publishedAt.substr(5, 2) + " " + publishedAt.substr(0, 4) + " " + publishedAt.substr(11, 5)}</p>
                            <h3>{author}</h3>
                            <p className={'description'}>{description}</p>
                        </a>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}

