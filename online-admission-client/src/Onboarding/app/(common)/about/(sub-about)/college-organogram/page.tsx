import React from "react";
import '../../../../../styles/organogram.css'
import { IconArrowDown, IconArrowLeftNew, IconArrowRightNew } from "@/components/icons";


const Organogram = () => {
 return (
   <div className="">
     <h1>DEEPER LIFE INTERNATIONAL BIBLE TRAINING COLLEGE ORGANOGRAM</h1>
     <div className="hierarchy">
       {" "}
       <div className="flex flex-col justify-center items-center lg:flex-row">
         {" "}
         <div className="level-1 mt-5 lg:-mt-[22.5rem]">
           <div className="node w-[24rem] lg:w-[18rem] xl:w-[22rem]">
             Governing Council
           </div>
         </div>
         <IconArrowDown className="w-8 h-8 fill-zinc-400 mt-0 lg:-mt-[22.5rem] lg:hidden" />
         <IconArrowRightNew className="w-8 h-8 fill-zinc-400 mt-0 lg:-mt-[22.5rem] hidden lg:block" />
         <div className="level-1 lg:-mt-[22.5rem]">
           <div className="node w-[24rem] lg:w-[18rem] xl:w-[22rem]">
             Rector
           </div>
         </div>
         <IconArrowDown className="w-8 h-8 fill-zinc-400 lg:hidden mt-0 lg:-mt-[22.5rem]" />
         <IconArrowRightNew className="w-8 h-8 fill-zinc-400 hidden lg:block mt-0 lg:-mt-[22.5rem]" />
         <div className="flex flex-col items-center justify-center mt-0 lg:mt-11 ">
           <div className="node w-[24rem] lg:w-[18rem] xl:w-[22rem]">
             Vice Rector
           </div>
           <IconArrowDown className="w-8 h-8 fill-zinc-400 flex flex-col lg:mt-1" />
           <div className="level-2">
             <div className="node w-[18rem] my-2">Internal Auditor</div>
             <div className="node w-[18rem] my-2">Librarian</div>
             <div className="node w-[18rem] my-2">Director of Finance</div>
             <div className="node w-[18rem] my-2">Registrar</div>
             <div className="node w-[18rem] my-2">Head of Students Affairs</div>
             <div className="node w-[18rem] my-2">
               Quality Assurance Officer
             </div>
           </div>
           <div className="level-2 flex flex-col lg:flex-row-reverse items-center mb-5 lg:mb-0">
             <div className="node w-[22rem] lg:w-[18rem] mt-2 lg:mt-0 mr-0 lg:mr-8">H.O.D</div>
             <IconArrowLeftNew className="w-8 h-8 fill-zinc-400 mr-4 hidden lg:block" />
             <IconArrowDown className="w-8 h-8 fill-zinc-400 mt-1 block lg:hidden" />
             <div className="-ml-0 lg:-ml-4"> </div>
           </div>
         </div>
       </div>
       <div className="level-3 mt-0 lg:-mt-12">
         <div className="node my-2">Theology & Leadership Unit</div>
         <div className="node my-2">Evangelism & Missions Unit</div>
         <div className="node my-2">Special Ministries & Languages Unit</div>
         <div className="node my-2">Church Administration & Management Unit</div>
         <div className="node my-2">Pastoral Counseling & Marriage Unit</div>
       </div>
     </div>
   </div>
 );
};

export default Organogram;
