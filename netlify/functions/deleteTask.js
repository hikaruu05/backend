exports.handler = async (event) => {
  const headers = {
      'Access-Control-Allow-Origin': '*', // Allow all origins
      'Access-Control-Allow-Headers': 'Content-Type', // Allow specific headers
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS' // Allow specific methods
  };
  if (event.httpMethod === 'DELETE') {
    const { id } = JSON.parse(event.body);
    const index = tasks.findIndex(t => t.id === id);
    if (index !== -1) {
      tasks.splice(index, 1);
      return {
        statusCode: 204,
        body: '',
      };
    }
    return {
      statusCode: 404,
      body: JSON.stringify({ message: 'Task Not Found' }),
    };
  }
  return {
    statusCode: 405,
    body: JSON.stringify({ message: 'Method Not Allowed' }),
  };
};
