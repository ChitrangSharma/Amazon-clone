import React from 'react'
import "../Styles/Header.css"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
function Header() {
    return (
        <div className="header">
        <img className="header__logo" src="amazon.png" alt="logo"/>
     <div className="header__search">
         <input className="header__searchInput" type="text" />
         <SearchIcon className="header__searchIcon"/>
     </div>
     <div className="header__nav">
         <div className="header__option">
        <span className="header__optionLineOne"> Hello</span>
        <span className="header__optionLineTwo"> SignIn</span>

         </div>
        
        <div className="header__option">
        <span className="header__optionLineOne"> return</span>
        <span className="header__optionLineTwo"> orders</span>
        </div>
        <div className="header__option">
        <span className="header__optionLineOne"> your</span>
        <span className="header__optionLineTwo"> prime</span>
        </div>
     </div>

     <div className="header__optionBasket">
         <ShoppingBasketIcon />
         <span className="header__optionLineTwo header__basketCount">
             0
         </span>
     </div>
        </div>
    )
}

export default Header
