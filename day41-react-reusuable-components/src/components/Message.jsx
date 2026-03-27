import React from 'react'
import Button from './Button'

function Message() {
    const title = "Click to read this message";

    function test(){
      console.log("Test");
    }

  return (
    <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt exercitationem ullam sequi, quas perferendis aperiam commodi temporibus expedita libero error nihil doloribus eum corrupti aspernatur. Pariatur at adipisci sed dolores?</p>
        <Button name={title} logic={test} />
    </div>
  )
}

export default Message