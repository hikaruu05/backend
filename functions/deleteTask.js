exports.handler = async (event) => {
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
