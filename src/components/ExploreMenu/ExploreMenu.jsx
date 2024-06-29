import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu' id="explore-menu">
      <h1>Dive into Our Dishes</h1>
      <p className='explore-menu-text'>Welcome to a culinary journey like no other! At Rapid Munch, we pride ourselves on offering a diverse array of dishes that cater to every palate. Whether you're craving traditional comfort food, exotic flavors, or healthy options, our menu has something for everyone.</p>
      <div className='explore-menu-list'>
        {menu_list.map((item, index) => {
          return (
            <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All" :item.menu_name)} key={index} className='explore-menu-list-item'>
              <img className={category===item.menu_name?"active":""} src={item.menu_image} alt={item.menu_name} />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
}

export default ExploreMenu;
