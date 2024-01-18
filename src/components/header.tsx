import ButtonAddEvent from './button-add-event';
import Filters from './filters';
import TripInfo from './trip-info';

function Header() {
  return (
    <header className="page-header">
      <div className="page-body__container  page-header__container">
        <img
          className="page-header__logo"
          src="img/logo.png"
          width={42}
          height={42}
          alt="Trip logo"
        />
        <div className="trip-main">
          <TripInfo />
          <Filters />
          <ButtonAddEvent />
        </div>
      </div>
    </header>
  );
}

export default Header;
