import { Link } from "react-router-dom";
import {useContext, useEffect} from "react";
import { UserContext } from "./UserContext";

export default function Header() {
    const {userInfo, setUserInfo} = useContext(UserContext);

    useEffect(() => {
      fetch("http://localhost:4000/profile", {
        credentials: "include"
      }).then(data => {
            data.json().then(userInfo => {
                setUserInfo(userInfo);
            })
        })
    }, [setUserInfo])     

    function logout() {
        fetch("http://localhost:4000/logout", {
            credentials: "include",
            method: "POST"
        });
        setUserInfo("")
    }
    
    const username = userInfo.username;

    return (
        <header>
            <Link to="/" className="logo">MyBlog</Link>
            <nav>
                {username && (
                    <>

                        <Link to="/create">Create new post</Link>
                        <Link to="/" onClick={logout}>Logout</Link>
                    </>
                )}
                {!username && (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )}
                
            </nav>
      </header>
    )
}