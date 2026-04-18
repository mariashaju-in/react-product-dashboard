import { useEffect, useState } from 'react';
import './App.css';
import ErrorMessage from './components/ErrorMessage';
import LoadingIndicator from './components/LoadingIndicator';
import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';
import SummaryCards from './components/SummaryCards';
import { getProducts } from './services/api';

function App() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    async function loadProducts() {
      try {
        setLoading(true);
        setError('');

        const productData = await getProducts(controller.signal);
        setProducts(productData);
      } catch (fetchError) {
        if (fetchError.name !== 'AbortError') {
          setError(fetchError.message || 'Something went wrong while loading products.');
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    loadProducts();

    return () => {
      controller.abort();
    };
  }, []);

  const normalizedSearchTerm = searchTerm.trim().toLowerCase();

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(normalizedSearchTerm),
  );

  const lowStockProducts = products.filter((product) => product.stockQuantity < 5);

  return (
    <main className="app">
      <section className="dashboard">
        <header className="dashboard__header">
          <div>
            <p className="dashboard__eyebrow">Inventory Overview</p>
            <h1>Product Dashboard</h1>
            <p className="dashboard__description">
              View product data from the API, search by name, and quickly spot items that
              need restocking.
            </p>
          </div>
        </header>

        <div className="dashboard__content">
          <SummaryCards
            totalProducts={products.length}
            lowStockProducts={lowStockProducts.length}
          />

          <SearchBar
            value={searchTerm}
            onChange={setSearchTerm}
            resultCount={filteredProducts.length}
          />

          {loading && <LoadingIndicator />}

          {error && <ErrorMessage message={error} />}

          {!loading && !error && (
            <ProductList
              products={filteredProducts}
              searchTerm={searchTerm}
            />
          )}
        </div>
      </section>
    </main>
  );
}

export default App;
