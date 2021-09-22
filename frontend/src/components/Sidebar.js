import React from 'react'
import { links } from './data'
import './Navmain.css'

const Sidebar = () => {
  return(
    <aside className={`sidebar show-sidebar`}>
      <ul className="links">
        {links.map((link)=>{
          const {id, url, text, icon} = link;
          return <li key={id}>
            <a href={url}>{icon}{text}</a>
          </li>
        })}
      </ul>
    </aside>
  );
}

export default Sidebar