exports.handler = async (event) => {
  const headers = {
      'Access-Control-Allow-Origin': '*', // Allow all origins
      'Access-Control-Allow-Headers': 'Content-Type', // Allow specific headers
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS' // Allow specific methods
  };
  return {
    statusCode: 200,
    headers,
    body: JSON.stringify(tasks),
  };
};
