import { authService  } from "fbase";
import { useState } from "react";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("");
    const onChange = (event) => {
        const{
            target : {name, value}
        } = event;
        if (name === "email") {
            setEmail(value);
        }; if (name === "password") {
            setPassword(value);
        };
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            let data;
            if (newAccount) {
                // create newAccount
                data = await authService.createUserWithEmailAndPassword(email,password);
            } else {
                // log in
                data = await authService.signInWithEmailAndPassword(email, password);
            }
            console.log(data);
        } catch (error){
            setError(error.message);
        }
    }
    const toggleAccount = () => setNewAccount((prev) => !prev)

    return (
        <div>
            <h1>Log in to Connect FlyingVPN</h1>
            <form onSubmit={onSubmit}>
                <input 
                name="email"
                type="email" 
                placeholder="Email" 
                required 
                value={email}
                onChange={onChange}
                />
                <input name="password" type="password" placeholder="Password" 
                required value={password} 
                onChange={onChange} />
                <input type="submit" value={newAccount ? "계정 만들기" : "로그인"} /><br></br>
                <span onClick={toggleAccount}>
                    {newAccount ? "로그인" : "계정 만들기"}
                </span><br />
                {error}
            </form>
        </div>
    );
};

export default Auth;