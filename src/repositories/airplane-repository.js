// src/repositories/airplane-repository.js
const { Op } = require('sequelize');
const CrudRepository = require('./crud-repository');
const { Airplane } = require('../models');
const AppError = require('../utils/errors/app-error');

class AirplaneRepository extends CrudRepository {
  constructor() {
    super(Airplane);
  }

  /**
   * Finds an airplane by its model number.
   * @param {string} modelNumber - The model number of the airplane.
   * @returns {Promise<Object|null>} - The airplane record, or null if not found.
   * @throws {AppError} - Throws an error if retrieval fails.
   */
  async findByModelNumber(modelNumber) {
    try {
      const airplane = await this.model.findOne({ where: { modelNumber } });
      if (!airplane) {
        throw new AppError('Airplane not found', 404);
      }
      return airplane;
    } catch (error) {
      console.error('Error finding airplane by model number:', error);
      throw new AppError('Unable to find airplane', 500);
    }
  }

  /**
   * Retrieves airplanes with a capacity greater than the specified value.
   * @param {number} minCapacity - The minimum capacity of airplanes to retrieve.
   * @returns {Promise<Array>} - An array of airplane records.
   * @throws {AppError} - Throws an error if retrieval fails.
   */
  async findByMinCapacity(minCapacity) {
    try {
      return await this.model.findAll({ where: { capacity: { [Op.gt]: minCapacity } } });
    } catch (error) {
      console.error('Error finding airplanes by minimum capacity:', error);
      throw new AppError('Unable to find airplanes by capacity', 500);
    }
  }
}

module.exports = AirplaneRepository;
