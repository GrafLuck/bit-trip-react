function Filters() {
  return (
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
  );
}

export default Filters;
