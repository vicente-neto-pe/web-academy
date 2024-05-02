import Joi from "joi";

export const productSchema = Joi.object().keys({
    name: Joi.string().min(3).max(50).required(),
    price: Joi.number().required(),
    stock: Joi.number().integer().required()
})