import React from 'react'
// import Home from '@/app/page'
// import Contact from '@/app/contact/page'
// import About from '@/app/about/page'

import { menuItems } from './configuration'
import './Menu.css'
// import{Link,HashRouter,Routes,Route} from 'react-router-dom'
import Link from'next/link'

const Menu = () => {
  return (
    <div>
    {/*<HashRouter> */} 
    <ul className='menu'>
       {
        menuItems.map(({name,link},index)=>{
          return <li key={`li_${index}`}>
          {/*<Link to={link}>{name}</Link></li>*/}
          <Link href={link}>{name}</Link></li>
        })
       }
    </ul>
     {/*</HashRouter> */} 

   {/* <Routes>
    <Route path='/home' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='*' element={<Navigate to='/home'/>}></Route>
    </Routes>
      */}
    </div>
  )
}

export default Menu