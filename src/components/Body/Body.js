import React, { useState, useEffect } from 'react';
import './Body.css';
import axios from 'axios';
import image from '../../assets/mountains.jpg'
import Footer from '../Footer/Footer';
import Landing from '../Landing/Landing';


export default function Body() {

    const [news, updateNews] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('https://newsapi.org/v2/' +
                'top-headlines?' +
                'country=us&' +
                'apiKey=' +
                process.env.REACT_APP_API_KEY)
            updateNews(response.data)
        }
        fetchData();
    },
        []
    )

    return (
        <div id={'conatiner'}>
            <Landing img={image} />
            <h1 id={'headlines'}>Headlines</h1>
            <div id={'wrapper'}>
                {news.articles === undefined ? '' : news.articles.map(({ title, urlToImage, author, description, publishedAt, url }) => (
                    <div key={url} className={'articlePreview'}>
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

