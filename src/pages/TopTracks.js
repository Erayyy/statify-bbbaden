import React, {useState} from 'react'
import useGetTopTracks from '../api/useGetTopTracks';
import { Card } from '../components/Card';

export const TopTracks = () => {
    const [term, setTerm] = useState("short_term")  
    const topTracks = useGetTopTracks(term);
    var cards = [];

    if (!topTracks) return <div>Log in Please</div>
    for (let i = 0; i < topTracks.items.length; i++) {
        cards.push(<Card number={i} 
            cover={topTracks.items[i].album.images[0].url} 
            link={topTracks.items[i].external_urls.spotify} 
            line1={topTracks.items[i].name} 
            line2={topTracks.items[i].artists[0].name} 
            line3={msToTime(topTracks.items[i].duration_ms)} 
            key={i}></Card>)
      }

    function handleChange(){
        var select = document.getElementById('dropdown');
        var value = select.options[select.selectedIndex].value;
        console.log(value);
        setTerm(value);
    }

    return (
        <div>
            <div className="topTracks">
            <div className="top_grid">
                <div className="top_menu">
                <h1>Top Tracks</h1>
                <div className="select-wrapper">
                    <h4>Time Span:</h4>
                <select id="dropdown" onChange={handleChange}>
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
        </div>
    )
}

function msToTime(duration) {
    var seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    if(hours == 0)
    {
      return minutes + ":" + seconds;
    }
    return hours + ":" + minutes + ":" + seconds;
  }