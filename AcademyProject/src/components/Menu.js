import styled from 'styled-components'
import menu from './css/menu.css';


const Menu = ({header, items, active, setActive}) => {
  return (
	  <div className={active ? 'menu active' : 'menu'} onClick = {() => setActive(false)} >
	  <div className="blur"/>
	  <div className="menu__content" onClick = {e => e.stopPropagation()}>
      <div className="menu__header">{header}</div>
	     <ul>
	       {items.map(item =>
             <li><a href={item.href} onClick = {() => setActive(false)}>{item.value}</a></li>
           )}
	     </ul>
	  </div>
	  </div>
  );
}

export default Menu;