import { createContext,useEffect,useState } from "react";

export const AuthContext= createContext({});

export const AuthProvider= ({children})=>{

    const [user,setUser]=useState();

    useEffect(()=>{
        const userToken = localStorage.getItem("user_token");
        const userStorage= localStorage.getItem("users_db");

        if (userToken && userStorage){
            const hasUser =JSON.parse(userStorage)?.filter(
                (user)=> user.email===JSON.parse(userToken).email
            )
            if (hasUser) setUser(hasUser[0]);
        }
    },[])

    const signin=(email,password)=>{

        const userStorage=JSON.parse(localStorage.getItem("users_db"))
        
        const hasUser=userStorage?.filter((user)=>user.email===email)
        
        if (hasUser?.length){
            if(hasUser[0],email===email && hasUser[0].password === password){
                const token = Math.random().toString(36).substring(2);
                localStorage.setItem("user_token",JSON.stringify({email,token}))
                setUser({email,password})
                return;
            }else{
                return "User or password incorret"
            }
        }else{
            return "User not found"
        }
    }

    return <AuthContext.Provider>{children}</AuthContext.Provider>
}

export default AuthProvider;