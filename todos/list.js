module.exports.list = (event, context, callback) => {

  // create a response
  const response = {
    statusCode: 200,
    body: JSON.stringify([])
  };

  callback(null, response);

};
