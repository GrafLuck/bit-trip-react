function MainPage() {
  return (
    <>
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
            <section className="trip-main__trip-info  trip-info">
              <div className="trip-info__main">
                <h1 className="trip-info__title">Amsterdam — Chamonix — Geneva</h1>
                <p className="trip-info__dates">Mar 18&nbsp;—&nbsp;20</p>
              </div>
              <p className="trip-info__cost">
                Total: €&nbsp;<span className="trip-info__cost-value">1230</span>
              </p>
            </section>
            <div className="trip-main__trip-controls  trip-controls">
              <div className="trip-controls__filters">
                <h2 className="visually-hidden">Filter events</h2>
                <form className="trip-filters" action="#" method="get">
                  <div className="trip-filters__filter">
                    <input
                      id="filter-everything"
                      className="trip-filters__filter-input  visually-hidden"
                      type="radio"
                      name="trip-filter"
                      defaultValue="everything"
                      defaultChecked=""
                    />
                    <label
                      className="trip-filters__filter-label"
                      htmlFor="filter-everything"
                    >
                      Everything
                    </label>
                  </div>
                  <div className="trip-filters__filter">
                    <input
                      id="filter-future"
                      className="trip-filters__filter-input  visually-hidden"
                      type="radio"
                      name="trip-filter"
                      defaultValue="future"
                    />
                    <label
                      className="trip-filters__filter-label"
                      htmlFor="filter-future"
                    >
                      Future
                    </label>
                  </div>
                  <div className="trip-filters__filter">
                    <input
                      id="filter-present"
                      className="trip-filters__filter-input  visually-hidden"
                      type="radio"
                      name="trip-filter"
                      defaultValue="present"
                    />
                    <label
                      className="trip-filters__filter-label"
                      htmlFor="filter-present"
                    >
                      Present
                    </label>
                  </div>
                  <div className="trip-filters__filter">
                    <input
                      id="filter-past"
                      className="trip-filters__filter-input  visually-hidden"
                      type="radio"
                      name="trip-filter"
                      defaultValue="past"
                    />
                    <label
                      className="trip-filters__filter-label"
                      htmlFor="filter-past"
                    >
                      Past
                    </label>
                  </div>
                  <button className="visually-hidden" type="submit">
                    Accept filter
                  </button>
                </form>
              </div>
            </div>
            <button
              className="trip-main__event-add-btn  btn  btn--big  btn--yellow"
              type="button"
            >
              New event
            </button>
          </div>
        </div>
      </header>
      <main className="page-body__page-main  page-main">
        <div className="page-body__container">
          <section className="trip-events">
            <h2 className="visually-hidden">Trip events</h2>
            <form
              className="trip-events__trip-sort  trip-sort"
              action="#"
              method="get"
            >
              <div className="trip-sort__item  trip-sort__item--day">
                <input
                  id="sort-day"
                  className="trip-sort__input  visually-hidden"
                  type="radio"
                  name="trip-sort"
                  defaultValue="sort-day"
                  defaultChecked=""
                />
                <label className="trip-sort__btn" htmlFor="sort-day">
                  Day
                </label>
              </div>
              <div className="trip-sort__item  trip-sort__item--event">
                <input
                  id="sort-event"
                  className="trip-sort__input  visually-hidden"
                  type="radio"
                  name="trip-sort"
                  defaultValue="sort-event"
                  disabled=""
                />
                <label className="trip-sort__btn" htmlFor="sort-event">
                  Event
                </label>
              </div>
              <div className="trip-sort__item  trip-sort__item--time">
                <input
                  id="sort-time"
                  className="trip-sort__input  visually-hidden"
                  type="radio"
                  name="trip-sort"
                  defaultValue="sort-time"
                />
                <label className="trip-sort__btn" htmlFor="sort-time">
                  Time
                </label>
              </div>
              <div className="trip-sort__item  trip-sort__item--price">
                <input
                  id="sort-price"
                  className="trip-sort__input  visually-hidden"
                  type="radio"
                  name="trip-sort"
                  defaultValue="sort-price"
                />
                <label className="trip-sort__btn" htmlFor="sort-price">
                  Price
                </label>
              </div>
              <div className="trip-sort__item  trip-sort__item--offer">
                <input
                  id="sort-offer"
                  className="trip-sort__input  visually-hidden"
                  type="radio"
                  name="trip-sort"
                  defaultValue="sort-offer"
                  disabled=""
                />
                <label className="trip-sort__btn" htmlFor="sort-offer">
                  Offers
                </label>
              </div>
            </form>
            <ul className="trip-events__list">
              <li className="trip-events__item">
                <div className="event">
                  <time className="event__date" dateTime="2019-03-18">
                    MAR 18
                  </time>
                  <div className="event__type">
                    <img
                      className="event__type-icon"
                      width={42}
                      height={42}
                      src="img/icons/taxi.png"
                      alt="Event type icon"
                    />
                  </div>
                  <h3 className="event__title">Taxi Amsterdam</h3>
                  <div className="event__schedule">
                    <p className="event__time">
                      <time
                        className="event__start-time"
                        dateTime="2019-03-18T10:30"
                      >
                        10:30
                      </time>
                      —
                      <time className="event__end-time" dateTime="2019-03-18T11:00">
                        11:00
                      </time>
                    </p>
                    <p className="event__duration">30M</p>
                  </div>
                  <p className="event__price">
                    €&nbsp;<span className="event__price-value">20</span>
                  </p>
                  <h4 className="visually-hidden">Offers:</h4>
                  <ul className="event__selected-offers">
                    <li className="event__offer">
                      <span className="event__offer-title">Order Uber</span>
                      +€&nbsp;
                      <span className="event__offer-price">20</span>
                    </li>
                  </ul>
                  <button
                    className="event__favorite-btn event__favorite-btn--active"
                    type="button"
                  >
                    <span className="visually-hidden">Add to favorite</span>
                    <svg
                      className="event__favorite-icon"
                      width={28}
                      height={28}
                      viewBox="0 0 28 28"
                    >
                      <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z" />
                    </svg>
                  </button>
                  <button className="event__rollup-btn" type="button">
                    <span className="visually-hidden">Open event</span>
                  </button>
                </div>
              </li>
              <li className="trip-events__item">
                <div className="event">
                  <time className="event__date" dateTime="2019-03-18">
                    MAR 18
                  </time>
                  <div className="event__type">
                    <img
                      className="event__type-icon"
                      width={42}
                      height={42}
                      src="img/icons/flight.png"
                      alt="Event type icon"
                    />
                  </div>
                  <h3 className="event__title">Flight Chamonix</h3>
                  <div className="event__schedule">
                    <p className="event__time">
                      <time
                        className="event__start-time"
                        dateTime="2019-03-18T12:25"
                      >
                        12:25
                      </time>
                      —
                      <time className="event__end-time" dateTime="2019-03-18T13:35">
                        13:35
                      </time>
                    </p>
                    <p className="event__duration">01H 10M</p>
                  </div>
                  <p className="event__price">
                    €&nbsp;<span className="event__price-value">160</span>
                  </p>
                  <h4 className="visually-hidden">Offers:</h4>
                  <ul className="event__selected-offers">
                    <li className="event__offer">
                      <span className="event__offer-title">Add luggage</span>
                      +€&nbsp;
                      <span className="event__offer-price">50</span>
                    </li>
                    <li className="event__offer">
                      <span className="event__offer-title">Switch to comfort</span>
                      +€&nbsp;
                      <span className="event__offer-price">80</span>
                    </li>
                  </ul>
                  <button className="event__favorite-btn" type="button">
                    <span className="visually-hidden">Add to favorite</span>
                    <svg
                      className="event__favorite-icon"
                      width={28}
                      height={28}
                      viewBox="0 0 28 28"
                    >
                      <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z" />
                    </svg>
                  </button>
                  <button className="event__rollup-btn" type="button">
                    <span className="visually-hidden">Open event</span>
                  </button>
                </div>
              </li>
              <li className="trip-events__item">
                <div className="event">
                  <time className="event__date" dateTime="2019-03-18">
                    MAR 18
                  </time>
                  <div className="event__type">
                    <img
                      className="event__type-icon"
                      width={42}
                      height={42}
                      src="img/icons/drive.png"
                      alt="Event type icon"
                    />
                  </div>
                  <h3 className="event__title">Drive Chamonix</h3>
                  <div className="event__schedule">
                    <p className="event__time">
                      <time
                        className="event__start-time"
                        dateTime="2019-03-18T14:30"
                      >
                        14:30
                      </time>
                      —
                      <time className="event__end-time" dateTime="2019-03-18T16:05">
                        16:05
                      </time>
                    </p>
                    <p className="event__duration">01H 35M</p>
                  </div>
                  <p className="event__price">
                    €&nbsp;<span className="event__price-value">160</span>
                  </p>
                  <h4 className="visually-hidden">Offers:</h4>
                  <ul className="event__selected-offers">
                    <li className="event__offer">
                      <span className="event__offer-title">Rent a car</span>
                      +€&nbsp;
                      <span className="event__offer-price">200</span>
                    </li>
                  </ul>
                  <button
                    className="event__favorite-btn  event__favorite-btn--active"
                    type="button"
                  >
                    <span className="visually-hidden">Add to favorite</span>
                    <svg
                      className="event__favorite-icon"
                      width={28}
                      height={28}
                      viewBox="0 0 28 28"
                    >
                      <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z" />
                    </svg>
                  </button>
                  <button className="event__rollup-btn" type="button">
                    <span className="visually-hidden">Open event</span>
                  </button>
                </div>
              </li>
              <li className="trip-events__item">
                <div className="event">
                  <time className="event__date" dateTime="2019-03-18">
                    MAR 18
                  </time>
                  <div className="event__type">
                    <img
                      className="event__type-icon"
                      width={42}
                      height={42}
                      src="img/icons/check-in.png"
                      alt="Event type icon"
                    />
                  </div>
                  <h3 className="event__title">Check-in Chamonix</h3>
                  <div className="event__schedule">
                    <p className="event__time">
                      <time
                        className="event__start-time"
                        dateTime="2019-03-18T12:25"
                      >
                        16:20
                      </time>
                      —
                      <time className="event__end-time" dateTime="2019-03-18T13:35">
                        17:00
                      </time>
                    </p>
                    <p className="event__duration">40M</p>
                  </div>
                  <p className="event__price">
                    €&nbsp;<span className="event__price-value">600</span>
                  </p>
                  <h4 className="visually-hidden">Offers:</h4>
                  <ul className="event__selected-offers">
                    <li className="event__offer">
                      <span className="event__offer-title">Add breakfast</span>
                      +€&nbsp;
                      <span className="event__offer-price">50</span>
                    </li>
                  </ul>
                  <button
                    className="event__favorite-btn event__favorite-btn--active"
                    type="button"
                  >
                    <span className="visually-hidden">Add to favorite</span>
                    <svg
                      className="event__favorite-icon"
                      width={28}
                      height={28}
                      viewBox="0 0 28 28"
                    >
                      <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z" />
                    </svg>
                  </button>
                  <button className="event__rollup-btn" type="button">
                    <span className="visually-hidden">Open event</span>
                  </button>
                </div>
              </li>
              <li className="trip-events__item">
                <div className="event">
                  <time className="event__date" dateTime="2019-03-19">
                    MAR 19
                  </time>
                  <div className="event__type">
                    <img
                      className="event__type-icon"
                      width={42}
                      height={42}
                      src="img/icons/sightseeing.png"
                      alt="Event type icon"
                    />
                  </div>
                  <h3 className="event__title">Sightseeing Chamonix</h3>
                  <div className="event__schedule">
                    <p className="event__time">
                      <time
                        className="event__start-time"
                        dateTime="2019-03-19T11:20"
                      >
                        14:20
                      </time>
                      —
                      <time className="event__end-time" dateTime="2019-03-19T13:00">
                        13:00
                      </time>
                    </p>
                    <p className="event__duration">01H 20M</p>
                  </div>
                  <p className="event__price">
                    €&nbsp;<span className="event__price-value">50</span>
                  </p>
                  <h4 className="visually-hidden">Offers:</h4>
                  <ul className="event__selected-offers">
                    <li className="event__offer">
                      <span className="event__offer-title">Book tickets</span>
                      +€&nbsp;
                      <span className="event__offer-price">40</span>
                    </li>
                    <li className="event__offer">
                      <span className="event__offer-title">Lunch in city</span>
                      +€&nbsp;
                      <span className="event__offer-price">30</span>
                    </li>
                  </ul>
                  <button className="event__favorite-btn" type="button">
                    <span className="visually-hidden">Add to favorite</span>
                    <svg
                      className="event__favorite-icon"
                      width={28}
                      height={28}
                      viewBox="0 0 28 28"
                    >
                      <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z" />
                    </svg>
                  </button>
                  <button className="event__rollup-btn" type="button">
                    <span className="visually-hidden">Open event</span>
                  </button>
                </div>
              </li>
              <li className="trip-events__item">
                <div className="event">
                  <time className="event__date" dateTime="2019-03-19">
                    MAR 19
                  </time>
                  <div className="event__type">
                    <img
                      className="event__type-icon"
                      width={42}
                      height={42}
                      src="img/icons/drive.png"
                      alt="Event type icon"
                    />
                  </div>
                  <h3 className="event__title">Drive Geneva</h3>
                  <div className="event__schedule">
                    <p className="event__time">
                      <time
                        className="event__start-time"
                        dateTime="2019-03-19T10:00"
                      >
                        16:00
                      </time>
                      —
                      <time className="event__end-time" dateTime="2019-03-19T11:00">
                        17:00
                      </time>
                    </p>
                    <p className="event__duration">01H</p>
                  </div>
                  <p className="event__price">
                    €&nbsp;<span className="event__price-value">20</span>
                  </p>
                  <button className="event__favorite-btn" type="button">
                    <span className="visually-hidden">Add to favorite</span>
                    <svg
                      className="event__favorite-icon"
                      width={28}
                      height={28}
                      viewBox="0 0 28 28"
                    >
                      <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z" />
                    </svg>
                  </button>
                  <button className="event__rollup-btn" type="button">
                    <span className="visually-hidden">Open event</span>
                  </button>
                </div>
              </li>
              <li className="trip-events__item">
                <div className="event">
                  <time className="event__date" dateTime="2019-03-19">
                    MAR 19
                  </time>
                  <div className="event__type">
                    <img
                      className="event__type-icon"
                      width={42}
                      height={42}
                      src="img/icons/flight.png"
                      alt="Event type icon"
                    />
                  </div>
                  <h3 className="event__title">Flight Geneva</h3>
                  <div className="event__schedule">
                    <p className="event__time">
                      <time
                        className="event__start-time"
                        dateTime="2019-03-19T18:00"
                      >
                        18:00
                      </time>
                      —
                      <time className="event__end-time" dateTime="2019-03-19T19:00">
                        19:00
                      </time>
                    </p>
                    <p className="event__duration">01H</p>
                  </div>
                  <p className="event__price">
                    €&nbsp;<span className="event__price-value">20</span>
                  </p>
                  <h4 className="visually-hidden">Offers:</h4>
                  <ul className="event__selected-offers">
                    <li className="event__offer">
                      <span className="event__offer-title">Add luggage</span>
                      +€&nbsp;
                      <span className="event__offer-price">30</span>
                    </li>
                    <li className="event__offer">
                      <span className="event__offer-title">Switch to comfort</span>
                      +€&nbsp;
                      <span className="event__offer-price">100</span>
                    </li>
                  </ul>
                  <button className="event__favorite-btn" type="button">
                    <span className="visually-hidden">Add to favorite</span>
                    <svg
                      className="event__favorite-icon"
                      width={28}
                      height={28}
                      viewBox="0 0 28 28"
                    >
                      <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z" />
                    </svg>
                  </button>
                  <button className="event__rollup-btn" type="button">
                    <span className="visually-hidden">Open event</span>
                  </button>
                </div>
              </li>
              <li className="trip-events__item">
                <div className="event">
                  <time className="event__date" dateTime="2019-03-20">
                    MAR 20
                  </time>
                  <div className="event__type">
                    <img
                      className="event__type-icon"
                      width={42}
                      height={42}
                      src="img/icons/drive.png"
                      alt="Event type icon"
                    />
                  </div>
                  <h3 className="event__title">Drive Geneva</h3>
                  <div className="event__schedule">
                    <p className="event__time">
                      <time
                        className="event__start-time"
                        dateTime="2019-03-20T08:25"
                      >
                        08:25
                      </time>
                      —
                      <time className="event__end-time" dateTime="2019-03-20T09:25">
                        09:25
                      </time>
                    </p>
                    <p className="event__duration">01H</p>
                  </div>
                  <p className="event__price">
                    €&nbsp;<span className="event__price-value">20</span>
                  </p>
                  <button className="event__favorite-btn" type="button">
                    <span className="visually-hidden">Add to favorite</span>
                    <svg
                      className="event__favorite-icon"
                      width={28}
                      height={28}
                      viewBox="0 0 28 28"
                    >
                      <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z" />
                    </svg>
                  </button>
                  <button className="event__rollup-btn" type="button">
                    <span className="visually-hidden">Open event</span>
                  </button>
                </div>
              </li>
              <li className="trip-events__item">
                <div className="event">
                  <time className="event__date" dateTime="2019-03-20">
                    MAR 20
                  </time>
                  <div className="event__type">
                    <img
                      className="event__type-icon"
                      width={42}
                      height={42}
                      src="img/icons/sightseeing.png"
                      alt="Event type icon"
                    />
                  </div>
                  <h3 className="event__title">Sightseeing Geneva</h3>
                  <div className="event__schedule">
                    <p className="event__time">
                      <time
                        className="event__start-time"
                        dateTime="2019-03-20T11:15"
                      >
                        11:15
                      </time>
                      —
                      <time className="event__end-time" dateTime="2019-03-20T12:15">
                        12:15
                      </time>
                    </p>
                    <p className="event__duration">01H</p>
                  </div>
                  <p className="event__price">
                    €&nbsp;<span className="event__price-value">180</span>
                  </p>
                  <button className="event__favorite-btn" type="button">
                    <span className="visually-hidden">Add to favorite</span>
                    <svg
                      className="event__favorite-icon"
                      width={28}
                      height={28}
                      viewBox="0 0 28 28"
                    >
                      <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z" />
                    </svg>
                  </button>
                  <button className="event__rollup-btn" type="button">
                    <span className="visually-hidden">Open event</span>
                  </button>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}

export default MainPage;
