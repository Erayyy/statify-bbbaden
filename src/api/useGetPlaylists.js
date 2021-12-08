import axios from 'axios';
import { useState, useEffect } from 'react';

export default function useGetPlaylists() {

    const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken'));
    const refreshToken = localStorage.getItem('refreshToken');
    const [playlists, setPlaylists] = useState();

    useEffect(() => {
        if (!accessToken) return
        axios.get('https://api.spotify.com/v1/browse/featured-playlists', {
                headers: {
                    'Authorization': 'Bearer '+ accessToken,
                },
            })
            .then((res) => {
                setPlaylists(res.data.playlists)
            })
            .catch(() => {
                axios.post('https://statify-bbbaden.azurewebsites.net/refresh', {
                    refreshToken,
                })
                    .then(res => {
                        localStorage.setItem('accessToken', res.data.accessToken)
                        setAccessToken(res.data.accessToken)
                        //window.location.reload(false)
                    })
                    .catch(() => {
                    //    window.location = "/"
                    })
            })
    }, [])
    
    return playlists;
}