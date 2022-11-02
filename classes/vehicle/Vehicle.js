const utils = require("../../utils/utils");
const Constants = require("./Constants");
const models = require("../../models");
const _ = require("lodash");

const create = async (req) => {
  try {
    const body = _.pick(req.body, Constants.createAttributes);
    console.log("body", body);
    const Vehicle = await models[Constants.name].create(body);

    return utils.classResponse(true, Vehicle, "");
  } catch (err) {
    return utils.classResponse(false, {}, err);
  }
};

const getById = async (req) => {
  try {
    const Vehicle = await models[Constants.name].findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: models.vehicleSubCategories,
          as: "vehicleSubCategories",
          attributes: ["id", "name"],
        },

        {
          model: models.locations,
          as: "locations",
          attributes: ["id", "locationName", "address", "pincode"],
        },
        {
          model: models.cities,
          as: "cities",
          attributes: ["id", "name"],
        },
        {
          model: models.fuelTypes,
          as: "fuelTypes",
          attributes: ["id", "name"],
        },
      ],
    });
    return utils.classResponse(true, Vehicle, "");
  } catch (err) {
    return utils.classResponse(false, {}, err);
  }
};

const get = async () => {
  try {
    const vehicleCategories = await models[Constants.name].findAll({
      include: [
        {
          model: models.vehicleSubCategories,
          as: "vehicleSubCategories",
          attributes: ["id", "name"],
        },
        {
          model: models.locations,
          as: "locations",
          attributes: ["id", "locationName", "address", "pincode"],
        },
        {
          model: models.cities,
          as: "cities",
          attributes: ["id", "name"],
        },
        {
          model: models.fuelTypes,
          as: "fuelTypes",
          attributes: ["id", "name"],
        },
      ],
    });
    return utils.classResponse(true, vehicleCategories, "");
  } catch (err) {
    return utils.classResponse(false, {}, err);
  }
};

const update = async (req) => {
  try {
    const body = _.pick(req.body, Constants.updateAttributes);
    const Vehicle = await models[Constants.name].update(body, {
      where: {
        id: req.params.id,
      },
    });
    return utils.classResponse(true, Vehicle, "");
  } catch (err) {
    return utils.classResponse(false, {}, err);
  }
};

const remove = async (req) => {
  try {
    const Vehicle = await models[Constants.name].destroy({
      where: {
        id: req.params.id,
      },
    });
    return utils.classResponse(true, Vehicle, "");
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
