// Imports
const AWS = require('aws-sdk')

AWS.config.update({
  region: '/* TODO: Add your region */'
})

// Declare local variables
const ec2 = new AWS.EC2()
const volumeId = '/* TODO: Add the volume to detach/attach */'
const instanceId = '/* TODO: Add the instance to attach to */'

detachVolume(volumeId)
  .then(() => attachVolume(instanceId, volumeId))

function detachVolume(volumeId) {
  // TODO: Configure detachVolume params
  const params = {
    VolumeId: volumeId
  }

  return new Promise((resolve, reject) => {
    // TODO: Detach the volume
    ec2.detachVolume(params, (err, data) => {
      if (err) reject(err)
      else resolve(data)
    })
  })
}

function attachVolume(instanceId, volumeId) {
  // TODO: Configure attachVolume params
  const params = {
    InstTanceId: instanceId,
    Device: '/dev/sdf',
    VolumeId: volumeId
  }

  return new Promise((resolve, reject) => {
    ec2.attachVolume(params, (err, data) => {
      if (err) reject(err)
      else resolve(data)
    })
  })
}