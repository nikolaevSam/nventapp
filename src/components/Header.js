import header__logo from '../images/header_logo.png';

export default function Header() {
  return (
    <div className='header'>
      <img className='header__logo' src={header__logo} alt='nvetn logo' />
      <h1 className='header__title'>Find Circuit App</h1>
    </div>
  );
}
