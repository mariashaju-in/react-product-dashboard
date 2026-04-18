function ErrorMessage({ message }) {
  return (
    <div className="status-message status-message--error" role="alert">
      <h2>Unable to load products</h2>
      <p>{message}</p>
    </div>
  );
}

export default ErrorMessage;
