const express = require('express');
const { AirplaneController } = require('../../controllers');

const router = express.Router();
const { AirplaneMiddlewares } = require('../../middlewares');
/**
 * POST /api/v1/airplanes
 * Create a new airplane
 */

router.post('/', AirplaneMiddlewares.validateCreateRequest, async (req, res) => {
  try {
    await AirplaneController.createAirplane(req, res);
  } catch (error) {
    console.error('Error in airplane route POST:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while creating the airplane',
      error: error.message,
    });
  }
});


/**
 * GET /api/v1/airplanes
 * Retrieve all airplanes
 */
router.get('/', async (req, res) => {
  try {
    await AirplaneController.getAllAirplanes(req, res);
  } catch (error) {
    console.error('Error in airplane route GET (all):', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while retrieving airplanes',
      error: error.message,
    });
  }
});

/**
 * GET /api/v1/airplanes/:id
 * Retrieve an airplane by its ID
 */
router.get('/:id', async (req, res) => {
  try {
    await AirplaneController.getAirplaneById(req, res);
  } catch (error) {
    console.error('Error in airplane route GET (by ID):', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while retrieving the airplane',
      error: error.message,
    });
  }
});

/**
 * PUT /api/v1/airplanes/:id
 * Update an airplane by its ID
 */
router.put('/:id', async (req, res) => {
  try {
    await AirplaneController.updateAirplane(req, res);
  } catch (error) {
    console.error('Error in airplane route PUT:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while updating the airplane',
      error: error.message,
    });
  }
});

/**
 * DELETE /api/v1/airplanes/:id
 * Delete an airplane by its ID
 */
router.delete('/:id', async (req, res) => {
  try {
    await AirplaneController.deleteAirplane(req, res);
  } catch (error) {
    console.error('Error in airplane route DELETE:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while deleting the airplane',
      error: error.message,
    });
  }
});

/**
 * GET /api/v1/airplanes/model/:modelNumber
 * Retrieve an airplane by its model number
 */
router.get('/model/:modelNumber', async (req, res) => {
  try {
    await AirplaneController.getAirplaneByModelNumber(req, res);
  } catch (error) {
    console.error('Error in airplane route GET (by model number):', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while retrieving the airplane by model number',
      error: error.message,
    });
  }
});

/**
 * GET /api/v1/airplanes/capacity/:minCapacity
 * Retrieve airplanes with a capacity greater than the specified value
 */
router.get('/capacity/:minCapacity', async (req, res) => {
  try {
    await AirplaneController.getAirplanesByMinCapacity(req, res);
  } catch (error) {
    console.error('Error in airplane route GET (by capacity):', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while retrieving airplanes by minimum capacity',
      error: error.message,
    });
  }
});

module.exports = router;
