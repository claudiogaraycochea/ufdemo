import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'uf-ui-pack';
import './SideMenu.css';

function SideMenu() {
  const { device } = useWindowDimensions();
  const [showSideMenu, setShowSideMenu] = useState(false);

  function getWindowDimensions() {
    const { innerWidth: width } = window;
    let device = 'desktop';

    if (width < 768) {
      device = 'mobile';
    } else {
      device = 'desktop';
    }
    return {
      device
    };
  }

  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
  }

  function changeSideMenu(visible: boolean) {
    setShowSideMenu(visible);
  }

  if ((device === 'mobile') && (!showSideMenu)) {
    return (
      <div className='side-menu-btn-open' onClick={() => changeSideMenu(true)}>
        {/*<Icon icon='IconMenu' />*/}
      </div>
    )
  }

  return (
    <div className={`side-menu ${device}`}>
      <div className='btn-menu-wrapper'>
        <Icon.IconMenu />
      </div>
      <div className='logo-wrapper'>
        <Icon.IconLogo />
      </div>
      <div className='menu'>
        <div className='item'>
          <Link to='/' className='menu-icon-link'>
            <div className='icon'><Icon.IconApps /></div>
          </Link>
        </div>
        <div className='item'>
          <Link to='/' className='menu-icon-link'>
            <div className='icon'><Icon.IconGraduation /></div>
          </Link>
        </div>
        <div className='item'>
          <Link to='/' className='menu-icon-link'>
            <div className='icon'><Icon.IconDiploma /></div>
          </Link>
        </div>
        <div className='item'>
          <Link to='/' className='menu-icon-link'>
            <div className='icon'><Icon.IconStats /></div>
          </Link>
        </div>
        <div className='item'>
          <Link to='/' className='menu-icon-link'>
            <div className='icon'><Icon.IconMoney /></div>
          </Link>
        </div>
        <div className='item'>
          <Link to='/' className='menu-icon-link'>
            <div className='icon'><Icon.IconHelp /></div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SideMenu