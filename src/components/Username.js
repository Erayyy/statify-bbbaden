import useGetMe from '../api/useGetMe';
import { React } from 'react'

export const Username = () => {
    const userInfo = useGetMe()
    if (!userInfo) return <h2>Welcome</h2>

    return (
        <h2>Welcome {userInfo.display_name}</h2>
    )
}
