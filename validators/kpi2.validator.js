const Joi = require("joi");

exports.kpi2QueryParamsSchema = Joi.object({
    cell_id: Joi.string().guid({version: ['uuidv4']}).optional(),
    interval_start_timestamp_ge: Joi.number().min(0).optional(),
    interval_start_timestamp_le: Joi.number().min(0).optional(),
    interval_end_timestamp_ge: Joi.number().min(0).optional(),
    interval_end_timestamp_le: Joi.number().min(0).optional(),
    number_of_unique_users: Joi.number().integer().min(0).optional(),
    interval: Joi.string().valid('1-hour', '5-minutes').optional(),
});
