const VehicleCategory = require("../classes/vehicleCategory/VehicleCategory");
const Utils = require("../utils/utils");

const create = async (req, res, next) => {
  try {
    const response = await VehicleCategory.create(req);
    return Utils.sendResponse(
      req,
      res,
      response.success,
      response.data,
      response.err
    );
  } catch (err) {
    next(err);
  }
};

const get = async (req, res, next) => {
  try {
    const response = await VehicleCategory.get();
    return Utils.sendResponse(
      req,
      res,
      response.success,
      response.data,
      response.err
    );
  } catch (err) {
    next(err);
  }
};

const getVehicleCategoryById = async (req, res, next) => {
  try {
    const response = await VehicleCategory.getById(req);
    return Utils.sendResponse(
      req,
      res,
      response.success,
      response.data,
      response.err
    );
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    const response = await VehicleCategory.update(req);
    return Utils.sendResponse(
      req,
      res,
      response.success,
      response.data,
      response.err
    );
  } catch (err) {
    next(err);
  }
};

const remove = async (req, res, next) => {
  try {
    const response = await VehicleCategory.remove(req);
    return Utils.sendResponse(
      req,
      res,
      response.success,
      response.data,
      response.err
    );
  } catch (err) {
    next(err);
  }
};

module.exports = {
  create,
  getVehicleCategoryById,
  get,
  update,
  remove,
};
