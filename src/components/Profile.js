import React from 'react';
import useGetMe from "../api/useGetMe";

export default function Profile(code) {
    const userInfo = useGetMe()
    if (!userInfo) return <div class="dropdown">
    <button class="dropbtn" onClick={DeleteLocalStorage}>Log out</button>
    
</div>

    return (
        <div className="header_profile">
            <div className="header_profile_image">
                <a href={userInfo.uri}><img src={userInfo.images[0].url} alt="" /></a>

            </div>
            <div class="dropdown">
                <button class="dropbtn">{userInfo.display_name}</button>
                <div class="dropdown-content">
                    {//<a href={userInfo.uri}>{userInfo.display_name}</a>
                    }
                    <a href={userInfo.uri}>Open Spotify</a>
                    <a href="https://statify-bbbaden.azurewebsites.net/" onClick={DeleteLocalStorage}>Log out</a>
                </div>
            </div>
        </div>
    )
}

function DeleteLocalStorage() {
    localStorage.clear()
    window.location.reload(false);
    return
}

