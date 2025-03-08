import React from 'react'
import Button from './Button'

const List = ["All", "Gaming","Songs","Live","Cricket","FootBall","News"];

const ButtonList = () => {
  return (
    // <div className="mt-6 flex items-center space-x-4 overflow-x-scroll scrollbar-hide whitespace-nowrap">
    //   {
    //     List.map((item, index) => (
    //         <Button name={item} key={index}/>
    //     ))
    //   }
    // </div>
    <div className="mt-6 w-full overflow-hidden"> 
      <div className="flex items-center space-x-4 overflow-x-auto scrollbar-hide w-screen p-2">
        {List.map((item, index) => (
          <Button name={item} key={index} />
        ))}
      </div>
    </div>
  )
}

export default ButtonList
