import Header from '../components/header';
import Sorting from '../components/sorting';
import TripEventsList from '../components/trip-events-list';

function MainPage() {
  return (
    <>
      <Header />
      <main className="page-body__page-main  page-main">
        <div className="page-body__container">
          <section className="trip-events">
            <h2 className="visually-hidden">Trip events</h2>
            <Sorting />
            <TripEventsList />
          </section>
        </div>
      </main>
    </>
  );
}

export default MainPage;
