// src/controllers/airplane-controller.js
const { StatusCodes } = require('http-status-codes');
const airplaneService = require('../services/airplane-service');
const { errorResponse, successResponse } = require('../utils/common');

/**
 * Creates a new airplane.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const createAirplane = async (req, res) => {
    try {
        const newAirplane = await airplaneService.createAirplane(req.body);
        successResponse.data = newAirplane;
        successResponse.message = 'Airplane created successfully';
        res.status(StatusCodes.CREATED).json(successResponse);
    } catch (error) {
        console.error('Error in createAirplane:', error);
        errorResponse.message = 'Unable to create airplane';
        errorResponse.error = error.message;
        res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
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
        successResponse.data = airplanes;
        successResponse.message = 'Airplanes retrieved successfully';
        res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
        console.error('Error in getAllAirplanes:', error);
        errorResponse.message = 'Unable to retrieve airplanes';
        errorResponse.error = error.message;
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse);
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
            successResponse.data = airplane;
            successResponse.message = 'Airplane retrieved successfully';
            res.status(StatusCodes.OK).json(successResponse);
        } else {
            errorResponse.message = 'Airplane not found';
            res.status(StatusCodes.NOT_FOUND).json(errorResponse);
        }
    } catch (error) {
        console.error('Error in getAirplaneById:', error);
        errorResponse.message = 'Unable to retrieve airplane';
        errorResponse.error = error.message;
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse);
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
            successResponse.message = 'Airplane updated successfully';
            res.status(StatusCodes.OK).json(successResponse);
        } else {
            errorResponse.message = 'Airplane not found';
            res.status(StatusCodes.NOT_FOUND).json(errorResponse);
        }
    } catch (error) {
        console.error('Error in updateAirplane:', error);
        errorResponse.message = 'Unable to update airplane';
        errorResponse.error = error.message;
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse);
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
            successResponse.message = 'Airplane deleted successfully';
            res.status(StatusCodes.NO_CONTENT).json(successResponse);
        } else {
            errorResponse.message = 'Airplane not found';
            res.status(StatusCodes.NOT_FOUND).json(errorResponse);
        }
    } catch (error) {
        console.error('Error in deleteAirplane:', error);
        errorResponse.message = 'Unable to delete airplane';
        errorResponse.error = error.message;
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse);
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
            successResponse.data = airplane;
            successResponse.message = 'Airplane retrieved successfully';
            res.status(StatusCodes.OK).json(successResponse);
        } else {
            errorResponse.message = 'Airplane not found';
            res.status(StatusCodes.NOT_FOUND).json(errorResponse);
        }
    } catch (error) {
        console.error('Error in getAirplaneByModelNumber:', error);
        errorResponse.message = 'Unable to retrieve airplane by model number';
        errorResponse.error = error.message;
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse);
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
        successResponse.data = airplanes;
        successResponse.message = 'Airplanes retrieved successfully';
        res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
        console.error('Error in getAirplanesByMinCapacity:', error);
        errorResponse.message = 'Unable to retrieve airplanes by minimum capacity';
        errorResponse.error = error.message;
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse);
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
