import React, {useState} from 'react'
import { Card } from '../components/Card';
import useGetTopArtists from '../api/useGetTopArtists';

//Css
import '../css/Top.css';    

export const TopArtists = () => {
    const [term, setTerm] = useState("short_term")  
    const topArtists = useGetTopArtists(term);
    var cards = [];

    if (!topArtists) return <div>Log in Please</div>

    for (let i = 0; i < topArtists.items.length; i++) {
        cards.push(<Card number={i} 
            cover={topArtists.items[i].images[0].url}
            link={topArtists.items[i].external_urls.spotify} 
            line2={topArtists.items[i].name}
            key={i}></Card>)
      }
    
      function handleChange(){
        var select = document.getElementById('dropdown');
        var value = select.options[select.selectedIndex].value;
        console.log(value);
        setTerm(value);
    }

    return (
        <div className="topArtists">
            <div className="top_grid">
                <div className="top_menu">
                <h1>Top Artists</h1>
                <div className="select-wrapper">
                <h4>Time Span:</h4>
                <select className="custom-select" name="" id="dropdown" onClick={handleChange}>
                    <option value="short_term">4 weeks</option>
                    <option value="medium_term">6 months</option>
                    <option value="long_term">lifetime</option>
                </select>
                </div>
                </div>
                <div className="top_cards">
                    {cards}
                </div>
            </div>
        </div>
    )
}
