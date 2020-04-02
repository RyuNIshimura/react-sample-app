import React from 'react';
import './styles/Header.scss';

class Header extends React.Component {
  render(): React.ReactNode {
    return (
      <div className='App'>
        <header className='header'>
          <div className='header-content'>
            <div className='header-column'>ユーザ一覧</div>
            <div className='header-column'>いいね一覧</div>
          </div>
        </header>
      </div>
    );
  }
}
export default Header;
