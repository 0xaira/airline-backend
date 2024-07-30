const { StatusCodes } = require('http-status-codes');
const airplaneService = require('../services/airplane-service');

/**
 * Creates a new airplane.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const createAirplane = async (req, res) => {
  try {
    const newAirplane = await airplaneService.createAirplane(req.body);
    res.status(StatusCodes.CREATED).json({
      success: true,
      message: 'Airplane created successfully',
      data: newAirplane,
    });
  } catch (error) {
    console.error('Error in createAirplane:', error);
    res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: 'Unable to create airplane',
      error: error.message,
    });
  }
};

/**
 * Retrieves all airplanes.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const getAllAirplanes = async (req, res) => {
  try {
    const airplanes = await airplaneService.getAllAirplanes();
    res.status(StatusCodes.OK).json({
      success: true,
      message: 'Airplanes retrieved successfully',
      data: airplanes,
    });
  } catch (error) {
    console.error('Error in getAllAirplanes:', error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: 'Unable to retrieve airplanes',
      error: error.message,
    });
  }
};

/**
 * Retrieves an airplane by its ID.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const getAirplaneById = async (req, res) => {
  const { id } = req.params;
  try {
    const airplane = await airplaneService.getAirplaneById(id);
    if (airplane) {
      res.status(StatusCodes.OK).json({
        success: true,
        message: 'Airplane retrieved successfully',
        data: airplane,
      });
    } else {
      res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: 'Airplane not found',
      });
    }
  } catch (error) {
    console.error('Error in getAirplaneById:', error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: 'Unable to retrieve airplane',
      error: error.message,
    });
  }
};

/**
 * Updates an airplane by its ID.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const updateAirplane = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;
  try {
    const affectedRows = await airplaneService.updateAirplane(id, updateData);
    if (affectedRows > 0) {
      res.status(StatusCodes.OK).json({
        success: true,
        message: 'Airplane updated successfully',
      });
    } else {
      res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: 'Airplane not found',
      });
    }
  } catch (error) {
    console.error('Error in updateAirplane:', error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: 'Unable to update airplane',
      error: error.message,
    });
  }
};

/**
 * Deletes an airplane by its ID.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const deleteAirplane = async (req, res) => {
  const { id } = req.params;
  try {
    const affectedRows = await airplaneService.deleteAirplane(id);
    if (affectedRows > 0) {
      res.status(StatusCodes.NO_CONTENT).json({
        success: true,
        message: 'Airplane deleted successfully',
      });
    } else {
      res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: 'Airplane not found',
      });
    }
  } catch (error) {
    console.error('Error in deleteAirplane:', error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: 'Unable to delete airplane',
      error: error.message,
    });
  }
};

/**
 * Retrieves an airplane by its model number.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const getAirplaneByModelNumber = async (req, res) => {
  const { modelNumber } = req.params;
  try {
    const airplane = await airplaneService.getAirplaneByModelNumber(modelNumber);
    if (airplane) {
      res.status(StatusCodes.OK).json({
        success: true,
        message: 'Airplane retrieved successfully',
        data: airplane,
      });
    } else {
      res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: 'Airplane not found',
      });
    }
  } catch (error) {
    console.error('Error in getAirplaneByModelNumber:', error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: 'Unable to retrieve airplane by model number',
      error: error.message,
    });
  }
};

/**
 * Retrieves airplanes with a capacity greater than the specified value.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const getAirplanesByMinCapacity = async (req, res) => {
  const { minCapacity } = req.params;
  try {
    const airplanes = await airplaneService.getAirplanesByMinCapacity(parseInt(minCapacity, 10));
    res.status(StatusCodes.OK).json({
      success: true,
      message: 'Airplanes retrieved successfully',
      data: airplanes,
    });
  } catch (error) {
    console.error('Error in getAirplanesByMinCapacity:', error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: 'Unable to retrieve airplanes by minimum capacity',
      error: error.message,
    });
  }
};

module.exports = {
  createAirplane,
  getAllAirplanes,
  getAirplaneById,
  updateAirplane,
  deleteAirplane,
  getAirplaneByModelNumber,
  getAirplanesByMinCapacity,
};
