function LoadingIndicator() {
  return (
    <div className="loading-card" aria-live="polite">
      <div className="loading-card__spinner" aria-hidden="true" />
      <div>
        <h2>Loading products</h2>
        <p>Please wait while the dashboard fetches data from the API.</p>
      </div>
    </div>
  );
}

export default LoadingIndicator;
