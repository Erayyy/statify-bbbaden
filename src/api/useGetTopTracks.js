
import { useEffect, useState } from "react";
import axios from "axios";


export default function useGetTopTracks( time_range ){
    const accessToken = localStorage.getItem("accessToken");
    const [topTracks, setTopTracks] = useState('');
    console.log(time_range)
    useEffect(() => {
        if (!accessToken) return
        axios.get("https://api.spotify.com/v1/me/top/tracks?time_range="+time_range+"&limit=50", {
            headers: {
                'Authorization': 'Bearer '+ accessToken,
            },
        })
        .then((res) => {
            setTopTracks(res.data)
        })
    }, [accessToken, time_range])

    console.log(topTracks)
    return topTracks
}