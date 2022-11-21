const Joi = require("joi");

exports.kpi1QueryParamsSchema = Joi.object({
    service_id: Joi.number().integer().min(0).optional(),
    interval_start_timestamp_ge: Joi.number().min(0).optional(),
    interval_start_timestamp_le: Joi.number().min(0).optional(),
    interval_end_timestamp_ge: Joi.number().min(0).optional(),
    interval_end_timestamp_le: Joi.number().min(0).optional(),
    total_bytes: Joi.number().integer().min(0).optional(),
    interval: Joi.string().valid('1-hour', '5-minutes').optional(),
});
