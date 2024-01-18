function TripInfo() {
  return (
    <section className="trip-main__trip-info  trip-info">
      <div className="trip-info__main">
        <h1 className="trip-info__title">Amsterdam — Chamonix — Geneva</h1>
        <p className="trip-info__dates">Mar 18&nbsp;—&nbsp;20</p>
      </div>
      <p className="trip-info__cost">
        Total: €&nbsp;<span className="trip-info__cost-value">1230</span>
      </p>
    </section>
  );
}

export default TripInfo;
