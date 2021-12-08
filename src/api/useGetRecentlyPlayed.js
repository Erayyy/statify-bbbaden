
import { useEffect, useState } from "react";
import axios from "axios";

export default function useGetTopTracks( time_range ){
    const accessToken = localStorage.getItem("accessToken");
    const [recent, setRecent] = useState('');

    useEffect(() => {
        if (!accessToken) return
        axios.get("https://api.spotify.com/v1/me/player/recently-played?limit=50", {
            headers: {
                'Authorization': 'Bearer '+ accessToken,
            },
        })
        .then((res) => {
            setRecent(res.data)
        })
    }, [accessToken])

    return recent
}