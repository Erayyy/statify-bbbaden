import React from 'react'
import '../css/dashboard.css'
import useGetMe from "../api/useGetMe";
import { RecentlyPlayed } from '../components/RecentlyPlayed'
import useGetPopularity from '../api/useGetPopularity';


export const TopDashboard = () => {
    const userInfo = useGetMe()
    const size = useGetPopularity() + ", 100"
    const percent = useGetPopularity() + "%"
    if (!userInfo) return <p>Error</p>
    console.log(userInfo)

    return (
        <div className="body">
            <div className="global dashboard">
                <p className="dashboard_titel">Obscurity:</p>
                <div className="flex_diagram">
                <p className="dashboard_titel">{percent}</p>
                    <svg viewBox="0 0 36 36" class="circular-chart">
                        <path class="circle"
                            stroke-dasharray={size}
                            d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                    </svg>
                </div>

            </div>
            <div className="follower dashboard">
                <p className="dashboard_titel">Follower:</p>
                <p className="stats"> {userInfo.followers.total}</p>
            </div>
            <div className="info dashboard">
                <p className="dashboard_titel">Info:</p>
                <div className="wrapper">
                    <p className="info_text">Name: {userInfo.display_name}</p>
                    <p className="info_text">Email: {userInfo.email}</p>
                    <p className="info_text">Country: {userInfo.country}</p>
                    <p className="info_text">Product: {userInfo.product}</p>
                </div>
            </div>
            <div className="recently dashboard">
                <p className="dashboard_titel">Recently Played:</p>
                <div className="wrapper">
                    <RecentlyPlayed></RecentlyPlayed>
                </div>
            </div>

        </div>
    )
}
