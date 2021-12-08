import { useEffect, useState } from "react";
import axios from "axios";

export default function useGetPopularity() {
    const accessToken = localStorage.getItem('accessToken');
    const popularities = [50];
    const time_range = "short_term";
    const [avgPopularity, setAvgPopularity] = useState();


    useEffect(() => {
        if (!accessToken) return
        axios.get("https://api.spotify.com/v1/me/top/tracks?time_range="+time_range+"&limit=50", {
            headers: {
                'Authorization': 'Bearer '+ accessToken,
            },
        })
        .then((res) => {
            for (let i = 0; i < 50; i++){
                popularities.push(res.data.items[i].popularity)
            }
            setAvgPopularity(popularities.reduce((a, b) => a + b, 0) / 50)
        })
    }, [accessToken, time_range])

    console.log(avgPopularity)
    return avgPopularity
}