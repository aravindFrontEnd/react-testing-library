// import axios from "axios";
// import { useState } from "react";

import { useState } from "react";
import axios from "axios";

// const Login = () => {
//   const [error, setError] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [user, setUser] = useState({});

//   const handleClick = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const { data } = await axios.get(
//         "https://jsonplaceholder.typicode.com/users/1"
//       );
//       setUser(data);
//     } catch {
//       setError(true);
//     }
//     setLoading(false)
//   };

//   return (
//     <div className="container">
//       <span className="user">{user.name}</span>
//       <form>
//         <input
//           type="text"
//           placeholder="username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button disabled={!username || !password} onClick={handleClick}>
//           {loading ? "please wait" : "Login"}
//         </button>
//         <span
//           data-testid="error"
//           style={{ visibility: error ? "visible" : "hidden" }}
//         >
//           Something went wrong!
//         </span>
//       </form>
//     </div>
//   );
// };

// export default Login;


const Login = () => {

    const [error,setError] = useState(false)
    const [users,setUsers] = useState({})
    const [loading,setLoading] = useState(false)
    const [userName,setUserName]= useState('')
    const [userPass,setUserPass]= useState('')

    const handleSubmit = async (e) =>{
         setLoading(true);
         e.preventDefault();
            try{
                const {data} = await axios.get('https://jsonplaceholder.typicode.com/users/3')
                setUsers(data)
            }catch(e){
               console.log(e)
               setError(true)
            }
            setLoading(false);
    
    }
  return (
    <form>
        <div className="container">
       <input type="text" placeholder='username' data-testid='username' onChange={e=>setUserName(e.target.value) } value={userName}/>
       <input type="password" data-testid='password' placeholder='password' value={userPass} onChange={e => setUserPass(e.target.value)}/>
       <button type='click' disabled={ !userName || !userPass } onClick={handleSubmit} >{loading ? 'waiting' : 'login'}</button> 
       <span className="user">{users?.name}</span>
       <span data-testid='error' style={{visibility : error ? 'visible' : 'hidden' }}>{error ? 'some thing went wrong' : ''}</span>
       </div>
    </form>
  )
}

export default Login
