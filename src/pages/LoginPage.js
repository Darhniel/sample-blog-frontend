import { useContext, useState } from "react";
import {Navigate} from "react-router-dom"
import { UserContext } from "../UserContext";

export default function LoginPage() {
    const [username, setUsernmae] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);
    const {setUserInfo} = useContext(UserContext)

    async function login(e) {
        e.preventDefault();
        const response = await fetch("https://sample-blog-api.vercel.app/login", {
            method: "POST",
            body: JSON.stringify({username, password}),
            headers: {"Content-Type":"application/json"},
            credentials: "include",
        });
        if(response.ok) {
            response.json()
                .then(userInfo => {
                    setUserInfo(userInfo)
                    setRedirect(true);
                })
            
        } else {
            alert("wrong credentials");
        }
    }

    if(redirect) {
        return <Navigate to="/" />
    }

    return (
        <>
            
            <form action="" className="login" onSubmit={login}>
                <h1>Login</h1>
                
                <input 
                    type="text" name="username" id="username" placeholder="username" value={username} 
                    onChange={event => setUsernmae(event.target.value)}
                />
                <input 
                    type="password" name="password" id="password" placeholder="passowrd" value={password}
                    onChange={event => setPassword(event.target.value)}
                />
                <button>Login</button>
            </form>
        </>
    )
}
