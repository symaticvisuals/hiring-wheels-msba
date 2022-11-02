const Vehicle = require("../classes/vehicle/Vehicle");
const Utils = require("../utils/utils");

const create = async (req, res, next) => {
  try {
    const response = await Vehicle.create(req);
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
    const response = await Vehicle.get();
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

const getVehicleById = async (req, res, next) => {
  try {
    const response = await Vehicle.getById(req);
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
    const response = await Vehicle.update(req);
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
    const response = await Vehicle.remove(req);
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
  getVehicleById,
  get,
  update,
  remove,
};
