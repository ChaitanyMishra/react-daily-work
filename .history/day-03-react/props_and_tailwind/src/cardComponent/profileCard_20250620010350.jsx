import React from "react";

function ProfileCard({name , jobRole , btn}){ 
    console.log(name)
    console.log(jobRole)
    return(
    
    <div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
  <img className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?_gl=1*il8jyg*_ga*MTQ1MTE1NTQ4Mi4xNzQwNzYxMTMw*_ga_8JE65Q40S6*czE3NTAzNTYzODIkbzMkZzEkdDE3NTAzNTY0OTMkajE0JGwwJGgw" alt="" />
  <div className="space-y-2 text-center sm:text-left">
    <div className="space-y-0.5">
      <p className="text-lg font-semibold text-black">{name}</p>
      <p className="font-medium text-gray-500">{jobRole}</p>
    </div>
    <button className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
      
      [btnText]
    </button>
  </div>
</div>
    );
}

export default ProfileCard;