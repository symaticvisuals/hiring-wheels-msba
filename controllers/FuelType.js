const FuelType = require("../classes/fuelType/FuelType");
const Utils = require("../utils/utils");

const create = async (req, res, next) => {
  try {
    const response = await FuelType.create(req);
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
    const response = await FuelType.get();
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

const getFuelTypeById = async (req, res, next) => {
  try {
    const response = await FuelType.getById(req);
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
    const response = await FuelType.update(req);
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
    const response = await FuelType.remove(req);
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
  getFuelTypeById,
  get,
  update,
  remove,
};
