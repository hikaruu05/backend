const tasks = []; // In-memory storage for demo purposes

exports.handler = async (event) => {
  const headers = {
      'Access-Control-Allow-Origin': '*', // Allow all origins
      'Access-Control-Allow-Headers': 'Content-Type', // Allow specific headers
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS' // Allow specific methods
  };
  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
      return {
          statusCode: 204,
          headers,
      };
  }

exports.handler = async (event) => {
  if (event.httpMethod === 'POST') {
    const { title } = JSON.parse(event.body);
    const newTask = { id: tasks.length + 1, title };
    tasks.push(newTask);
    return {
      statusCode: 201,
      headers,
      body: JSON.stringify(newTask),
    };
  }
  return {
    statusCode: 405,
    headers,
    body: JSON.stringify({ message: 'Method Not Allowed' }),
  };
}
};
