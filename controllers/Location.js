const Location = require("../classes/location/Location");
const Utils = require("../utils/utils");

const create = async (req, res, next) => {
  try {
    const response = await Location.create(req);
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
    const response = await Location.get();
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

const getLocationById = async (req, res, next) => {
  try {
    const response = await Location.getById(req);
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
    const response = await Location.update(req);
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
    const response = await Location.remove(req);
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
  getLocationById,
  get,
  update,
  remove,
};
