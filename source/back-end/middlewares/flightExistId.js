const { Flight } = require('../models');

const flightExistId = async (id = '') => {
  try {
    const flight = await Flight.findById(id);
    if (!flight) throw new Error('Flight with this id does not exist');
  } catch (error) {
    throw error
  }
}

module.exports = {
  flightExistId
};
