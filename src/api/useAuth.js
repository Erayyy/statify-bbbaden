import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useAuth( code ) {
    const [accessToken, setAccessToken] = useState()

    useEffect(() => {
        if (!code) return
        axios.post('http://localhost:3001/login', { 
                code,
            })
            .then(res => {
                setAccessToken(res.data.accessToken)
                localStorage.setItem("accessToken", res.data.accessToken)
                localStorage.setItem("refreshToken", res.data.refreshToken)
                window.history.pushState({}, null, "/")
                window.location.reload(false);
            })
            .catch(err => {
             window.location = "/"
        })
    }, [code])
    
    return accessToken;
}
