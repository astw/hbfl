// Imports
// TODO: Import the aws-sdk
const AWS = require('aws-sdk')
AWS.config.update({
  region: 'us-east-1'
})

const ec2 = new AWS.EC2();

createImage('<imageid>', 'hamsterImage')
  .then(() => console.log('Complete'))

function createImage(seedInstanceId, imageName) {
  const params = {
    InstanaceId: seedInstanceId,
    Name: imageName
  }

  return new Promise((resolve, reject) => {
    ec2.createImage(params, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    })
  })
}