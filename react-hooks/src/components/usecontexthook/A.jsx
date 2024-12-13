import React, { createContext, useState } from "react";
import B from "./B";
/*useContext() allows you to share values between multiple levels of componnets
 without passing through props

 Provider Componnet
 1. import {createContext} from "react*
 2. export const MyContext = createContext()
 3. <MyContext.Provider value = {value}>
 <Child />
 </MyContext.Provider>

Consumer Componnets
1.import React, {useContext} from "react";
2. import {MyContext} from "./"
3. const value = useContext(MyContext)

this case: value =  user

 */

export const UserContext = createContext();

const A = () => {
    const [user, setUser] = useState("Ying")

  return (
    <div className="box">
      <h1>Component A</h1>
      <h2>{`Hello ${user}`}</h2>
      <UserContext.Provider value={user}>
            <B user={user}/>
      </UserContext.Provider>
  
    </div>
  );
};

export default A;
