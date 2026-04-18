function SearchBar({ value, onChange, resultCount }) {
  return (
    <section className="search-section">
      <div className="search-section__top">
        <div>
          <label
            className="search-section__label"
            htmlFor="product-search"
          >
            Search Products
          </label>
          <p className="search-section__hint">
            Type a product name to filter the list.
          </p>
        </div>

        <p className="search-section__results">{resultCount} result(s)</p>
      </div>

      <div className="search-section__controls">
        <input
          id="product-search"
          className="search-section__input"
          type="text"
          placeholder="Search by product name"
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
      </div>
    </section>
  );
}

export default SearchBar;
