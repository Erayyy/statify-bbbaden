import useAuth from "../api/useAuth";
import useGetPlaylists from "../api/useGetPlaylists";
import { Card } from "./Card";

export default function Playlists() {
    const playlists = useGetPlaylists();
    var cards = [];
    if (!playlists) return <h1>No Data</h1>

    console.log(playlists)
    for (let i = 0; i < playlists.items.length; i++) {
        cards.push(<Card number={i} 
          cover={playlists.items[i].images[0].url} 
          link={playlists.items[i].external_urls.spotify} 
          line1={""} 
          line2={playlists.items[i].name} 
          line3={""}
          key={i}></Card>)
      }
      return (
          <div className="card_wrapper">
            {cards}
          </div>
        );
}