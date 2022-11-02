const City = require("../classes/city/City");
const Utils = require("../utils/utils");

const create = async (req, res, next) => {
  try {
    const response = await City.create(req);
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
    const response = await City.get();
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

const getCityById = async (req, res, next) => {
  try {
    const response = await City.getById(req);
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
    const response = await City.update(req);
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
    const response = await City.remove(req);
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
  getCityById,
  get,
  update,
  remove,
};
