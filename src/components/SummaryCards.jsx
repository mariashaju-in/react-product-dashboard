function SummaryCards({ totalProducts, lowStockProducts }) {
  return (
    <section className="summary-grid">
      <article className="summary-card">
        <p className="summary-card__title">Total Products</p>
        <h2>{totalProducts}</h2>
        <p className="summary-card__text">All products returned from the API.</p>
      </article>

      <article className="summary-card">
        <p className="summary-card__title">Low Stock Products</p>
        <h2>{lowStockProducts}</h2>
        <p className="summary-card__text">Products with a stock quantity below 5.</p>
      </article>
    </section>
  );
}

export default SummaryCards;
