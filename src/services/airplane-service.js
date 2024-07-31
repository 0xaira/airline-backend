const { AirplaneRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');

/**
 * Creates a new airplane.
 * @param {Object} airplaneData - The data for the new airplane.
 * @returns {Promise<Object>} - The created airplane record.
 * @throws {AppError} - Throws an error if creation fails.
 */
async function createAirplane(airplaneData) {
  try {
    const airplaneRepository = new AirplaneRepository();
    return await airplaneRepository.create(airplaneData);
  } catch (error) {
    console.error('Error creating airplane:', error);
    throw new AppError('Unable to create airplane', 500);
  }
}

/**
 * Retrieves all airplanes.
 * @returns {Promise<Array>} - An array of airplane records.
 * @throws {AppError} - Throws an error if retrieval fails.
 */
async function getAllAirplanes() {
  try {
    const airplaneRepository = new AirplaneRepository();
    return await airplaneRepository.findAll();
  } catch (error) {
    console.error('Error retrieving airplanes:', error);
    throw new AppError('Unable to retrieve airplanes', 500);
  }
}

/**
 * Retrieves an airplane by its ID.
 * @param {number|string} id - The ID of the airplane.
 * @returns {Promise<Object|null>} - The airplane record, or null if not found.
 * @throws {AppError} - Throws an error if retrieval fails.
 */
async function getAirplaneById(id) {
  try {
    const airplaneRepository = new AirplaneRepository();
    return await airplaneRepository.findById(id);
  } catch (error) {
    console.error('Error retrieving airplane by ID:', error);
    throw new AppError('Unable to retrieve airplane', 500);
  }
}

/**
 * Updates an airplane by its ID.
 * @param {number|string} id - The ID of the airplane.
 * @param {Object} updateData - The data to update the airplane with.
 * @returns {Promise<number>} - The number of affected rows.
 * @throws {AppError} - Throws an error if update fails.
 */
async function updateAirplane(id, updateData) {
  try {
    const airplaneRepository = new AirplaneRepository();
    return await airplaneRepository.update(id, updateData);
  } catch (error) {
    console.error('Error updating airplane:', error);
    throw new AppError('Unable to update airplane', 500);
  }
}

/**
 * Deletes an airplane by its ID.
 * @param {number|string} id - The ID of the airplane.
 * @returns {Promise<number>} - The number of affected rows.
 * @throws {AppError} - Throws an error if deletion fails.
 */
async function deleteAirplane(id) {
  try {
    const airplaneRepository = new AirplaneRepository();
    return await airplaneRepository.delete(id);
  } catch (error) {
    console.error('Error deleting airplane:', error);
    throw new AppError('Unable to delete airplane', 500);
  }
}

/**
 * Retrieves an airplane by its model number.
 * @param {string} modelNumber - The model number of the airplane.
 * @returns {Promise<Object|null>} - The airplane record, or null if not found.
 * @throws {AppError} - Throws an error if retrieval fails.
 */
async function getAirplaneByModelNumber(modelNumber) {
  try {
    const airplaneRepository = new AirplaneRepository();
    return await airplaneRepository.findByModelNumber(modelNumber);
  } catch (error) {
    console.error('Error retrieving airplane by model number:', error);
    throw new AppError('Unable to retrieve airplane by model number', 500);
  }
}

/**
 * Retrieves airplanes with a capacity greater than the specified value.
 * @param {number} minCapacity - The minimum capacity of airplanes to retrieve.
 * @returns {Promise<Array>} - An array of airplane records.
 * @throws {AppError} - Throws an error if retrieval fails.
 */
async function getAirplanesByMinCapacity(minCapacity) {
  try {
    const airplaneRepository = new AirplaneRepository();
    return await airplaneRepository.findByMinCapacity(minCapacity);
  } catch (error) {
    console.error('Error retrieving airplanes by minimum capacity:', error);
    throw new AppError('Unable to retrieve airplanes by capacity', 500);
  }
}

module.exports = {
  createAirplane,
  getAllAirplanes,
  getAirplaneById,
  updateAirplane,
  deleteAirplane,
  getAirplaneByModelNumber,
  getAirplanesByMinCapacity,
};
