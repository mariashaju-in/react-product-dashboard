function ProductList({ products, searchTerm }) {
  if (products.length === 0) {
    return (
      <div className="product-list-empty">
        <h2>No matching products</h2>
        <p>
          {searchTerm
            ? `No products found for "${searchTerm}".`
            : 'No products are available right now.'}
        </p>
      </div>
    );
  }

  return (
    <section className="product-section">
      <div className="product-section__header">
        <h2>Products</h2>
        <p>{products.length} item(s) shown</p>
      </div>

      <div className="product-list">
        {products.map((product) => (
          <article
            className="product-card"
            key={product.id}
          >
            <div className="product-card__content">
              <h3>{product.name}</h3>
              <p className="product-card__label">Product name</p>
            </div>

            <div className="product-card__price">
              <span>${Number(product.price).toFixed(2)}</span>
              <p>Price</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProductList;
