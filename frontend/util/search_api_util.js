export const productSearch = (data, success) => (
  $.ajax({
    method: 'GET',
    url: '/api/products/search',
    data: {query: data},
    success,
    error: () => console.log('search error')
  })
);
