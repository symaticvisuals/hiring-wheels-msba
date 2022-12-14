const utils = require("../../utils/utils");
const Constants = require("./Constants");
const models = require("../../models");
const _ = require("lodash");

const create = async (req) => {
  console.log("HERE");
  try {
    const body = _.pick(req.body, Constants.createAttributes);
    // console.log(body, "HERE");
    const role = await models[Constants.name].create(
      _.pick(req.body, Constants.createAttributes)
    );

    return utils.classResponse(true, role, "");
  } catch (err) {
    console.log(err);
    return utils.classResponse(false, {}, err);
  }
};

const getById = async (req) => {
  try {
    const role = await models[Constants.name].findOne({
      where: {
        id: req.params.id,
      },
    });
    return utils.classResponse(true, role, "");
  } catch (err) {
    return utils.classResponse(false, {}, err);
  }
};

const get = async () => {
  try {
    const roles = await models[Constants.name].findAll();
    return utils.classResponse(true, roles, "");
  } catch (err) {
    return utils.classResponse(false, {}, err);
  }
};

const update = async (req) => {
  try {
    const body = _.pick(req.body, Constants.updateAttributes);
    const role = await models[Constants.name].update(body, {
      where: {
        id: req.params.id,
      },
    });
    return utils.classResponse(true, role, "");
  } catch (err) {
    return utils.classResponse(false, {}, err);
  }
};

const remove = async (req) => {
  try {
    const role = await models[Constants.name].destroy({
      where: {
        id: req.params.id,
      },
    });
    return utils.classResponse(true, role, "");
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


