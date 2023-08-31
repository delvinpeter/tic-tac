import React ,{useState}from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home';
import Login from './components/Login';
import { BrowserRouter as Router, Switch, Route,Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";
import JoinGame from './components/JoinGame';
import About from './components/About';
import Contact from './components/Contact';



function App(){
  const api_key = "e54tappch7yy";
  const cookies = new Cookies();
  const token = cookies.get("token");

  const client = StreamChat.getInstance(api_key);
  const [isAuth, setIsAuth] = useState(false);

  const logOut = () => {
    cookies.remove("token");
    cookies.remove("userId");
    cookies.remove("firstName");
    cookies.remove("lastName");
    cookies.remove("hashedPassword");
    cookies.remove("channelName");
    cookies.remove("username");
    client.disconnectUser();
    setIsAuth(false);
  };

  if (token) {
    client
      .connectUser(
        {
          id: cookies.get("userId"),
          name: cookies.get("username"),
          firstName: cookies.get("firstName"),
          lastName: cookies.get("lastName"),
          hashedPassword: cookies.get("hashedPassword"),
        },
        token
      )
      .then((user) => {
        setIsAuth(true);
      });
    }

  return(
    
    
    <div className='App'>
    
      <Router>
      <Navbar/>
      
      
      {isAuth ?(
        <Chat client={client}>
          <JoinGame logOut={logOut}/>
          
          
          
      </Chat>
      ):(
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth}/>} />
        <Route path="/signup" element={<SignUp setIsAuth={setIsAuth}/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      )}
    </Router>
    </div>
      );
}

export default App;