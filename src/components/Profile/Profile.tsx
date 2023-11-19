import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile">
      <img src="profile-picture.jpg" alt="Profile" className="profile-picture" />
      <h1 className="profile-name">Ваше Имя</h1>
      <p className="profile-bio">Описание профиля или краткое био</p>
    </div>
  );
};

export default Profile;
