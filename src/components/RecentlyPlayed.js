import React from 'react'
import { Card } from './Card';
import useGetRecentlyPlayed from '../api/useGetRecentlyPlayed';

export const RecentlyPlayed = () => {
    var cards = [];
    const recent = useGetRecentlyPlayed();
    console.log(recent)
    if (!recent) return <div>Please Login</div>

    for (let i = 0; i < recent.items.length; i++) {
        cards.push(<Card number={i} 
          cover={recent.items[i].track.album.images[0].url} 
          link={recent.items[i].track.external_urls.spotify} 
          line1={recent.items[i].track.name} 
          line2={recent.items[i].track.artists[0].name} 
          line3={msToTime(recent.items[i].track.duration_ms)}
          key={i}></Card>)
      }
      return (
          <div className="card_wrapper">
            {cards}
          </div>
        );
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


