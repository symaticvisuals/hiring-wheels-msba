const utils = require("../../utils/utils");
const Constants = require("./Constants");
const models = require("../../models");
const _ = require("lodash");

const create = async (req) => {
  try {
    const body = _.pick(req.body, Constants.createAttributes);
    const location = await models[Constants.name].create(body);
    return utils.classResponse(true, location, "");
  } catch (err) {
    return utils.classResponse(false, {}, err);
  }
};

// include the city name in the response
const getById = async (req) => {
  try {
    const location = await models[Constants.name].findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: models.cities,
          as: "city",
          attributes: ["name"],
        },
      ],
    });
    return utils.classResponse(true, location, "");
  } catch (err) {
    return utils.classResponse(false, {}, err);
  }
};

const get = async () => {
  try {
    const locations = await models[Constants.name].findAll({
      include: [
        {
          model: models.cities,
          as: "city",
          attributes: ["name"],
        },
      ],
    });
    return utils.classResponse(true, locations, "");
  } catch (err) {
    return utils.classResponse(false, {}, err);
  }
};

const update = async (req) => {
  try {
    const body = _.pick(req.body, Constants.updateAttributes);
    const location = await models[Constants.name].update(body, {
      where: {
        id: req.params.id,
      },
    });
    return utils.classResponse(true, location, "");
  } catch (err) {
    return utils.classResponse(false, {}, err);
  }
};

const remove = async (req) => {
  try {
    const location = await models[Constants.name].destroy({
      where: {
        id: req.params.id,
      },
    });
    return utils.classResponse(true, location, "");
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
