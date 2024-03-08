import React, { useState } from 'react'
import "./ProfilePage.css"

import Navigation from '../../Components/UserProfile/Navigation/Navigation'
import MyInfo from '../../Components/UserProfile/MyProfile/MyInfo'
import MyOrder from '../../Components/UserProfile/Myorder/MyOrder'
import MyWishlist from '../../Components/UserProfile/MyWishlist/MyWishlist'
const ProfilePage = () => {

  const [profile, setProfile]= useState("Myprofile");
  const profileData=(e)=>{
    setProfile(e);
    console.log(profile);
  }
  return (
    <div className='Profile-container'>
     <Navigation profiledata={profileData}/>   
     {
      profile ==="Myprofile" ? <MyInfo/>:(profile==="Myorder" ? <MyOrder/>: <MyWishlist/>)
     }
    
  
    </div>
  )
}

export default ProfilePage
