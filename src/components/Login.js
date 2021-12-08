const AUTH_URL =
"https://accounts.spotify.com/authorize?client_id=1d9716b896714fdb9bbc9f0de3195d42&response_type=code&redirect_uri=https://statify-bbbaden.azurewebsites.net/&show_dialog=true&scope=user-top-read%20user-read-recently-played%20user-read-private%20user-read-email"

 
 export default function Login(){
    return(
        <div className="header_flex_login">
               <a href={ AUTH_URL } className="header_login">Login</a>
        </div>
    )
 }