const utils = require("../../utils/utils");
const Constants = require("./Constants");
const models = require("../../models");
const _ = require("lodash");

const create = async (req) => {
  try {
    const body = _.pick(req.body, Constants.createAttributes);
    const vehicleCategory = await models[Constants.name].create(body);
    return utils.classResponse(true, vehicleCategory, "");
  } catch (err) {
    return utils.classResponse(false, {}, err);
  }
};

const getById = async (req) => {
  try {
    const vehicleCategory = await models[Constants.name].findOne({
      where: {
        id: req.params.id,
      },
    });
    return utils.classResponse(true, vehicleCategory, "");
  } catch (err) {
    return utils.classResponse(false, {}, err);
  }
};

const get = async () => {
  try {
    const vehicleCategories = await models[Constants.name].findAll();
    return utils.classResponse(true, vehicleCategories, "");
  } catch (err) {
    return utils.classResponse(false, {}, err);
  }
};

const update = async (req) => {
  try {
    const body = _.pick(req.body, Constants.updateAttributes);
    const vehicleCategory = await models[Constants.name].update(body, {
      where: {
        id: req.params.id,
      },
    });
    return utils.classResponse(true, vehicleCategory, "");
  } catch (err) {
    return utils.classResponse(false, {}, err);
  }
};

const remove = async (req) => {
  try {
    const vehicleCategory = await models[Constants.name].destroy({
      where: {
        id: req.params.id,
      },
    });
    return utils.classResponse(true, vehicleCategory, "");
  } catch (err) {
    return utils.classResponse(false, {}, err);
  }
};

module.exports = {
  create,
  getById,
  get,
  update,
  remove,
};
