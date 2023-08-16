const { Flight } = require('../models');

const flightExistId = async (id = '') => {
  try {
    const flight = await Flight.findById(id);
    if (!flight) throw new Error('Flight with this id does not exist');
  } catch (error) {
    console.log(error);
    throw new Error('Contact with the administrator')
  }
}

module.exports = {
  flightExistId
};
