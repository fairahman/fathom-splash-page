import { Route, Routes, Link } from 'react-router-dom'
import Contact from '../pages/Contact'
import Docs from '../pages/Docs'
import Home from '../pages/Home'

//bg-base-100

 export default function Navbar() {
  return (
    <>
      <div id='navbar' className=" bg-customNavColor  navbar ">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl"></a>
      </div>
      <div className="flex-none">
        <ul className="text-navFontColor text-2xl menu menu-horizontal px-1">
           <li><Link to = '/'><button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Home</button></Link></li> 
          <li><Link to = '/docs'> <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Docs</button></Link></li>
          <li><Link to = '/contact'><button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Conctacts</button></Link></li>
        </ul>
      </div>
    </div>
    <Routes>
     {/* <Route path = '/' element ={<Home/>} /> */}
      <Route path = '/docs' element ={<Docs/>} />
      <Route path = '/contact' element = {<Contact/>} />
    </Routes>
    </>
    
  )
  
 }
 