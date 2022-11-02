const utils = require("../../utils/utils");
const Constants = require("./Constants");
const models = require("../../models");
const _ = require("lodash");

const create = async (req) => {
  try {
    const body = _.pick(req.body, Constants.createAttributes);
    const city = await models[Constants.name].create(body);
    return utils.classResponse(true, city, "");
  } catch (err) {
    return utils.classResponse(false, {}, err);
  }
};

const getById = async (req) => {
  try {
    const ciy = await models[Constants.name].findOne({
      where: {
        id: req.params.id,
      },
    });
    return utils.classResponse(true, ciy, "");
  } catch (err) {
    return utils.classResponse(false, {}, err);
  }
};

const get = async () => {
  try {
    const cities = await models[Constants.name].findAll();
    return utils.classResponse(true, cities, "");
  } catch (err) {
    return utils.classResponse(false, {}, err);
  }
};

const update = async (req) => {
  try {
    const body = _.pick(req.body, Constants.updateAttributes);
    const city = await models[Constants.name].update(body, {
      where: {
        id: req.params.id,
      },
    });
    return utils.classResponse(true, city, "");
  } catch (err) {
    return utils.classResponse(false, {}, err);
  }
};

const remove = async (req) => {
  try {
    const city = await models[Constants.name].destroy({
      where: {
        id: req.params.id,
      },
    });
    return utils.classResponse(true, city, "");
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
