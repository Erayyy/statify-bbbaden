import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useGetMe() {
    const [userInfo, setUserInfo] = useState('')
    const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken'))

    useEffect(() => {
        if (!accessToken) return
        axios.get('https://api.spotify.com/v1/me', {
            headers: {
                'Authorization': 'Bearer '+ accessToken,    
            },
        })
        .then((res) => {
            setUserInfo(res.data)
        })
        // Expired Token
        .catch(() => {
            //window.location('/')
        })
            
    }, [accessToken])

    return userInfo;
}