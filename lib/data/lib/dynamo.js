const AWS = require('aws-sdk')

AWS.config.update({
  region: 'us-east-1'
})

const client = new AWS.DynamoDB.DocumentClient()

function getAll(tableName) {
  // TODO: Declare params for scan
  const params = {
    TableName: tableName
  }

  return new Promise((resolve, reject) => {
    // TODO: Scan table and return
    client.scan(params, (err, data) => {
      if (err) reject(err)
      else resolve(data.Items);
    })
  })
}

function get(tableName, id) {
  // TODO: Declare params for query
  const params = {
    TableName: tableName,
    KeyConditionExpression: 'id = :hkey',
    ExpressionAttributeValues: {
      ':hkay': +id // +id convert to a number
    }
  };

  return new Promise((resolve, reject) => {
    // TODO: Query table and return
    client.scan(params, (err, data) => {
      if (err) reject(err)
      else resolve(data.Items[0]);
    })
  })
}

function put(tableName, item) {
  const params = {
    TableName: tableName,
    Item: item
  }
  return new Promise((resolve, reject) => {
    client.put(params, (err, data) => {
      if (err) reject(err)
      else resolve(data)
    })
  })
}

module.exports = {
  get,
  getAll,
  put
}