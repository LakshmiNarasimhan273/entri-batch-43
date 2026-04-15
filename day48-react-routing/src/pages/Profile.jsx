import React from 'react'
import Avatar from "../components/Avatar";
import Role from "../components/Role";
import Information from "../components/Information";
import Button from "../components/Button";

/* props.user = {
      name: "Narasimhan",
      role: "Developer",
      email: "narasimhan@developer.in",
      location: "Tamil Nadu, India",
      skills: "MERN Stack",
      bio: "AI enhanced FSD Mentor and passionate about Backend systems",
      image: "https://i.pinimg.com/736x/e8/7a/b0/e87ab0a15b2b65662020e614f7e05ef1.jpg",
      isOnline: true
  }*/

function ProfileCard(props) {
  const primaryFunction = () => {
    alert("Primary Button clicked");
  }

  const secondaryFunction = () => {
    alert("Secondary button clicked");
  }
  return (
    <div className='bg-white shadow-xl rounded-2xl p-6 w-96'>

      <div className='flex flex-col items-center'>
        <Avatar image={props.user.image} online={props.user.isOnline} />
        <h2 className='text-xl font-bold mt-4'>{props.user.name}</h2>
        <Role role={props.user.role} />
      </div>

      <div className='mt-6 space-y-2'>
        <Information label="Email" value={props.user.email} />
        <Information label="Location" value={props.user.location} />
        <Information label="Skills" value={props.user.skills} />

        {
          props.user.bio ? (
            <Information label="Bio" value={props.user.bio} />
          ) : (
            <p className='text-gray-400 text-sm'>No bio available</p>
          )
        }
      </div>

      <div className='mt-6 flex justify-center gap-3'>
        <Button action={primaryFunction} label="Follow" type="primary" />
        <Button action={secondaryFunction} label="Message" type="secondary" />
      </div>


    </div>
  )
}

export default ProfileCard