import { authService } from "fbase";
import { useHistory } from "react-router-dom"
import './Home.css'

const Home = () => {
    const history = useHistory();
    
    const onLogOutClick = () => {
        authService.signOut();
        history.push("/")
    }

    const onConnectCilck = () => {
        alert("Connected To FlyingVPN server 01")
    }

    return (
        <>
            <h1>FlyingVPN</h1><br></br>
            <button onClick={onLogOutClick}>Log out</button><br />
            <button onClick={onConnectCilck}>Connect to Server</button>
            <p>There is no contents now.</p>
        </>
    )
}

export default Home;