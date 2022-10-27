import './Landing.scss';
import Signup from '../components/overlays/Signup';
import logo from '../assets/logo.svg';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { User, Credentials } from '../models/models';

interface Props {
    setActiveUser: (activeUser: string) => void;
    activeUser: string;
}


<<<<<<< HEAD
function Landing({activeUser, setActiveUser}: Props) {
    const [feedback, setFeedback] = useState('');
=======
function Landing({activeUser, setActiveUser}: Props) {  
    const [feedback, setFeedback] = useState<string>('');
>>>>>>> userOrderDetails
    const [openSignup, setOpenSignup] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    console.log("Landing - activeUser: ", activeUser);
    console.log("Landing - setActiveUser: ", setActiveUser);

    const signupClick = () => {
        {setOpenSignup(true)}
    }

    function guestUser() {
        navigate('/menu');
        // Set user?
    }

    

    async function signIn() {
        let newData: User | any = await userLogin()
        // userLogin();
        // navigate('/menu');
        // fetchUsers();
        // console.log(newData);
        
        if (newData == 404) {
            console.log('wrong username/password');
<<<<<<< HEAD
            setFeedback("Wrong username or password");
=======
            setFeedback('');
            setTimeout(() => {
              setFeedback('displayFeedback');
            }, 500);
>>>>>>> userOrderDetails
        } else if (newData == 400) {
            console.log('bad input'); 
            setFeedback("The database seems to be on vacation");
        } 
        else {
            setActiveUser(newData.username);
            navigate('/menu');
            if (newData.customer == false) {
                navigate('/admin');
            }
        }  
    }

    async function userLogin(): Promise<User | number> {
        const credentials: Credentials = {
            username: username,
            password: password
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials)
        }

        const response = await fetch('api/users/login', requestOptions);

        // Kontrollera svaret 
        if(response.status == 200) {
            const data: User = await response.json();
            console.log(data);
            return data; 
        } else {
            return 404;
        }
    }


    return (
        <section className="landingPage content-wrapper">
            <img className="logo" src={logo} />
            <section className="loginSignup">
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
<<<<<<< HEAD
                <p>{feedback}</p>
=======
                <p className={"feedback " + feedback}>Wrong username or password.</p>
>>>>>>> userOrderDetails
                <button onClick={signIn}>Log in</button>
            </section>
            <button className="buttonMember" onClick={signupClick}>Become a Member</button>
            {openSignup && <Signup closeOverlay={setOpenSignup} setActiveUser={setActiveUser} />}
        </section>
    )
}

export default Landing;