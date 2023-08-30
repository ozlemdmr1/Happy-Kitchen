import Joi from "joi";

const Schema = Joi.object({
  name: Joi.string().required(),
  price: Joi.string().required(),
  imageUrl: Joi.string(),
  description: Joi.string(),
  categoryId: Joi.string(),
  type: Joi.string().required(),
});

export default Schema;
