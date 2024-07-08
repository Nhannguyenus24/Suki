import React, { useState } from 'react';
import '../assets/SettingPage.css';

function Account() {
  return (
      <div>
          <form className="account">
              <div className="account-header">
                  <h1 className="account-title">Account Setting</h1>
                  <div className="btn-container">
                      <button type="button" className="btn-cancel">Cancel</button>
                      <button type="button" className="btn-save">Save</button>
                  </div>
              </div>
              <div className="account-edit">
                  <div className="input-container">
                      <label>First Name</label>
                      <input type="text" placeholder="First Name" />
                  </div>
                  <div className="input-container">
                      <label>Last Name</label>
                      <input type="text" placeholder="Last Name" />
                  </div>
              </div>
              <div className="account-edit">
                  <div className="input-container">
                      <label>Email</label>
                      <input type="text" placeholder="Email" />
                  </div>
                  <div className="input-container">
                      <label>Phone number</label>
                      <input type="text" placeholder="Phone number" />
                  </div>
              </div>
              <div className="account-edit">
                  <div className="input-container">
                      <label>Address</label>
                      <textarea placeholder="Address"></textarea>
                  </div>
              </div>
          </form>
      </div>
  );
}

const ProfileSetting = () => {
    const [activeSection, setActiveSection] = useState('Account');

    const renderSection = () => {
        switch (activeSection) {
            case 'Account':
                return <Account />;
            case 'Notification':
                return <Notification />;
            case 'Setting':
                return <Setting />;
            case 'Logout':
                return <Logout />;
            default:
                return <Account />;
        }
    };

    return (
        <div className="container">
            <div className="profile">
                <div className="profile-header">
                    <img src="2.png" alt="profile-img" className="profile-img" />
                    <div className="profile-text-container">
                        <h1 className="profile-title">Nhan Nguyen</h1>
                        <p className="profile-email">abc@gmail.com</p>
                    </div>
                </div>
                <div className="menu">
                    <a href="#" className="menu-link" onClick={() => setActiveSection('Account')}>
                        <i className="fa-solid fa-circle-user menu-icon"></i>
                        Account
                    </a>
                    <a href="#" className="menu-link" onClick={() => setActiveSection('Notification')}>
                        <i className="fa-solid fa-bell menu-icon"></i>
                        Notification
                    </a>
                    <a href="#" className="menu-link" onClick={() => setActiveSection('Setting')}>
                        <i className="fa-solid fa-gear menu-icon"></i>
                        Setting
                    </a>
                    <a href="#" className="menu-link" onClick={() => setActiveSection('Logout')}>
                        <i className="fa-solid fa-right-from-bracket menu-icon"></i>
                        Logout
                    </a>
                </div>
            </div>
            <div className="content">
                {renderSection()}
            </div>
        </div>
    );
};

export default ProfileSetting;
