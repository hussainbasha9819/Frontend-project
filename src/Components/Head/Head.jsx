const Head=()=>{
return(
  <>
<div className="w-full h-20 phone:w-full phone:h-20 phone:bg-orange-400 flex phone:flex bg-white  ">
  <div className="w-1/5 h-20 phone:w-1/2 phone:h-20 phone:flex phone:items-center phone:justify-center  flex items-center justify-center ">
    <img className="w-11/12 h-20 " src="https://www.logodesign.net/logo-new/building-on-crescent-4303ld.png" alt="" />
  </div>
  <div className="w-1/5 h-20 flex phone:hidden items-center justify-center ">
    <button className="w-10/12 h-14 bg-green-700 rounded-xl font-bold text-white text-xl ">All Programs<i class="fa-solid fa-angle-down ml-2 "></i></button>
  </div>
  <div className="w-1/5 h-20 flex phone:hidden  "></div>
  <div className="w-1/5 h-20 flex items-center phone:hidden justify-center font-bold gap-3  text-lg text-slate-400 ">
    <span className="cursor-pointer">Career Service</span>
    <span className="cursor-pointer">Discover<i class="fa-solid fa-angle-down ml-2"></i></span>
  </div>
  <div className="w-1/5 h-20 phone:w-1/2 phone:h-20   phone:flex phone:items-center phone:justify-center phone:gap-4 flex items-center justify-evenly ">
  <button className="w-1/2 h-14 phone:w-[40%] phone:text-sm phone:items-center phone:justify-center phone:h-[5vh] phone:flex bg-green-700 rounded-xl font-bold text-white text-xl "><a href="https://pegasus.imarticus.org/login">Login</a></button>
  <img className="phone:w-[40%] phone:h-[5vh] phone:flex " src="https://cdn.pegasus.imarticus.org/imarticus_2/whatsappicon.svg" alt="" />
  </div>
</div>
  </>
)
}
export default Head