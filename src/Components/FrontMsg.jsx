import React from "react";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
function FrontMsg() {
  return (
    <>
    

<div className="Parent md:block hidden">

<div className=" flex w-full h-[40px] bg-green-700 text-white justify-between p-2 ">
        <div className="Opening-time text-white text-sm ml-7">
       <AccessTimeIcon /> Opening Hours: 10:00 Am - 7:00 PM
        </div>

        <div className="information flex ">
          <div className="email mr-4"> <EmailIcon className="mr-2"/>malronexports@gmail.com</div>
          <span className="info-bar mr-1"></span>
          <div className="Phonenumber mr-5"> <PhoneIcon/>+915853487692</div>
        </div>
      </div>


</div>


    </>
  );
}

export default FrontMsg;
