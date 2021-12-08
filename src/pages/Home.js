import React from 'react'
import { Link } from 'react-router-dom'
import Playlists from '../components/Playlists'
import { Username } from '../components/Username'
import useAuth from '../api/useAuth'
import image1 from '../images/image (2).png'
import image2 from '../images/image (1).png'
import image3 from '../images/image.png'
import '../css/Home.css'

export const Home = () => {
    const code = new URLSearchParams(window.location.search).get("code");
    const accessToken = useAuth(code);
    console.log(localStorage.getItem("accessToken"));
    
    
    return (
        <div>
            <section className="color1">
                <div>
                    {localStorage.getItem("accessToken") != null ? <Username code={code}></Username>: <h2>Please Login</h2>}
                    <p className="text">Get an overview of the most interesting <br/> stats of your Spotify Account.</p>
                    <img className="home_image" src={image1} alt="" />
                </div>
            </section>
            <div className="spacer layer1">
            </div>
            <section className="color2">
            <h2 className="titel">Your Top </h2>
            <p className="text">View your most listened Tracks and Artists</p>
                    <div className="link_wrapper">
                    <div className="link">
                        <Link to="/TopTracks">Top Tracks</Link>
                    </div>
                    <div className="link">
                        <Link to="/TopArtists">Top Artists</Link>
                    </div>
                    </div>
                    <img className="home_image2" src={image2} alt="" />
            </section>
            <div className="spacer layer2">
            </div>
            <section className="color3">
            <h2 className="titel">Dashboard</h2>
            <p className="text">See enlarged Statistics such as your followers <br/> and recently played songs on your Dashboard page.</p>
            <div className="link_wrapper">
                    <div className="link">
                        <Link to="/Dashboard">Dashboard</Link>
                    </div>
                    </div>
                    <img className="home_image2" src={image3} alt="" />
            </section>
            <div className="spacer layer3">
            </div>
            <section className="color4">
                <div>
                    <h1 className="recentTitle">Tip of the Day</h1>
                    <Playlists></Playlists>
                </div>
            </section>
        </div>
    )
}
