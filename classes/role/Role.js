const utils = require("../../utils/utils");
const Constants = require("./Constants");
const models = require("../../models");
const _ = require("lodash");

const create = async (req) => {
    try {
        const body = _.pick(req.body, Constants.createAttributes);
        const role = await models[Constants.name].create(body);
        return utils.classResponse(true, role, "");
    } catch (err) {
        return utils.classResponse(false, {}, err);
    }
};


const get = async (req) => {
}