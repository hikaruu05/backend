const tasks = []; // In-memory storage for demo purposes

exports.handler = async (event) => {
  if (event.httpMethod === 'POST') {
    const { title } = JSON.parse(event.body);
    const newTask = { id: tasks.length + 1, title };
    tasks.push(newTask);
    return {
      statusCode: 201,
      body: JSON.stringify(newTask),
    };
  }
  return {
    statusCode: 405,
    body: JSON.stringify({ message: 'Method Not Allowed' }),
  };
};
