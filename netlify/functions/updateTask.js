exports.handler = async (event) => {
  if (event.httpMethod === 'PUT') {
    const { id, title } = JSON.parse(event.body);
    const task = tasks.find(t => t.id === id);
    if (task) {
      task.title = title;
      return {
        statusCode: 200,
        body: JSON.stringify(task),
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
