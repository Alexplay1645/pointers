import React from 'react';
import '../App.css';

function TopNav() {
  return (
    <div>
      <div className="top-hashtags-bar">
        <div className="hashtags-content">
        <span>#вседлядому</span>
        <span>#швидкотазручно</span>
        <span>#buy now</span>
        <span>#вседлядому</span>
        <span>#швидкота зручно</span>
        <span>#buy now</span>
        <span>#вседлядому</span>
        <span>#швидкотазручно</span>
        <span>#buy now</span>
        <span>#вседлядому</span>
        <span>#швидкотазручно</span>
        <span>#buy now</span>
        </div>
      </div>

      <div className="top-nav-bar">
        <div className="nav-left">
          <div className="menu-item">
            <img src="/Icons/Menu.png" alt="Menu Icon" className="menu-icon-top" />
            <span className="nav-link">Меню</span>
          </div>

          <img src="/Icons/Union.png" alt="BN Logo" className="nav-logo" />
          <span className="nav-link">Товари</span>
          <span className="nav-link">Кімнати</span>
          <span className="nav-link">Дизайн</span>
        </div>

        <div className="nav-right">
          <div className="nav-item">
            <img src="/Icons/Place.png" alt="Location Icon" className="nav-icon-img"/>
            <span className="nav-location">Київ</span>
          </div>

          <div className="nav-item">
            <img src="/Icons/peopleicon.png" alt="User Icon" className="nav-icon-img"/>
            <span className="nav-login">Привіт! Увійдіть В Систему</span>
          </div>

          <img src="/Icons/Cart.png" alt="Cart" className="nav-icon1" />
          <img src="/Icons/Heart.png" alt="Heart" className="nav-icon2" />
        </div>
      </div>
    </div>
  );
}

export default TopNav;
