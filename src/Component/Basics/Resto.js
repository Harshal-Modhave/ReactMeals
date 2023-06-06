import React, { useState } from 'react'
import "./Style.css"
import Menu from './MenuAPI'
import MenuCard from './MenuCard'
import Navbar from './Navbar'

// ... Spread operator 
const uniqueList = [
    ... new Set (
        Menu.map((currElem)=>{
            return currElem.category;
        })
    ), "All",
];

console.log(uniqueList);
 
const Resto = () => {
    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenulist] = useState(uniqueList);

    const filterItem = (category) => {

        if(category === "All"){
            setMenuData(Menu);
            return;
        }

        const updatedList = Menu.filter((currElem) => {
            return currElem.category === category;
        });
        setMenuData(updatedList);
    }

  return (
    <>
        <Navbar filterItem={filterItem} menuList={menuList} />
        <MenuCard menuData={menuData} />
    </>
  )
}

export default Resto;
