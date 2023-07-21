import { useState } from "react"

export default function RegisterPage() {
    const [username, setusername] = useState("");
    const [password, setPassword] = useState("");
    async function register(e) {
        e.preventDefault();           
        const response =   await fetch("http://localhost:4000/register", {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {"Content-Type":"application/json"}
        })
        if (response.status === 200) {
            alert("Registration Successful");
        } else {
            alert("Registration failed");
        }
    }
    
    return (
        <>
            
            <form action="" className="register" onSubmit={register}>
                <h1>Register</h1>
                <input 
                    type="text" name="username" id="username" placeholder="username" value={username} 
                    onChange={(event) => {
                        return (
                            setusername(event.target.value)
                        )
                    }}
                />
                <input 
                    type="password" name="password" id="password" placeholder="password" value={password}
                    onChange={(event) => {
                        return (
                            setPassword(event.target.value)
                        )
                    }}
                />
                <button>Register</button>
            </form>
        </>
        
    )
}