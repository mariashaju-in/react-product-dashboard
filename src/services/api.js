const PRODUCTS_API_URL = 'http://localhost:8080/api/products';

export async function getProducts(signal) {
  const response = await fetch(PRODUCTS_API_URL, {
    method: 'GET',
    signal,
  });

  if (!response.ok) {
    throw new Error('Failed to fetch products. Please check that the API is running.');
  }

  const data = await response.json();

  if (Array.isArray(data)) {
    return data;
  }

  if (data && Array.isArray(data.content)) {
    return data.content;
  }

  throw new Error(
    'Invalid API response format. Expected either an array of products or an object with a content array.',
  );
}
