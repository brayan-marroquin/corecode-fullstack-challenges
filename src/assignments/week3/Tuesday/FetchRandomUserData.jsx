/**
 * React code to fetch from this API random users. You should display the Name, website, email and phone of a random user. 
 * Also there should be a Reset button to fetch a new user (For this you need to generate a random number from 1 to 10).
 */
 import React, { useEffect, useState } from "react";

 const FetchRandomUserData = () => {
   const [data, setData] = useState({});
 
   const getDataUsers = async () => {
     try {
       const randomNum = Math.floor(Math.random() * 10) + 1;
       const userResponse = await fetch(
         "https://jsonplaceholder.typicode.com/users/" + randomNum 
       );
       const jsonUser = await userResponse.json();
       console.log("user data received:", jsonUser);
       setData(jsonUser);
     } catch (error) {
       console.error("Error fetching user data...", error);
     }
   };  
 
   const handleOnClick = async () => {
     await getDataUsers();
   };
   
   useEffect(() => {
     getDataUsers();
   }, []);
 
   return (
     <div>
       <button id="reset" onClick={handleOnClick}>Reset</button>
       <div>
         <h2>User Data</h2>
         <label>Name: {data?.name}</label>
         <br />
         <label>Website: {data?.website}</label>
         <br />
         <label>Email: {data?.email}</label>
         <br />
         <label>Phone: {data?.phone}</label>
         <br />
       </div>
     </div>
   );
 };
 
 export default FetchRandomUserData;
 