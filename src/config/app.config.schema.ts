import * as Joi from 'joi';

export default Joi.object({
  /* DATABASE INFORMATION */
  DATABASE_CLIENT: Joi.required(),
  DATABASE_HOST: Joi.required(),
  DATABASE_PORT: Joi.number().default(5432),
  DATABASE_USER: Joi.required(),
  DATABASE_PASSWORD: Joi.required(),
  DATABASE_NAME: Joi.required(),
  /* GCP */
  GCP_TYPE: Joi.required(),
  GCP_PROJECT_ID: Joi.required(),
  GCP_PRIVATE_KEY_ID: Joi.required(),
  GCP_PRIVATE_KEY: Joi.required(),
  GCP_CLIENT_EMAIL: Joi.required(),
  GCP_CLIENT_ID: Joi.required(),
  GCP_AUTH_URI: Joi.required(),
  GCP_TOKEN_URI: Joi.required(),
  GCP_AUTH_PROVIDER_X509_CERT_URL: Joi.required(),
  GCP_CLIENT_X509_CERT_URL: Joi.required(),
  GCP_BUCKET_NAME: Joi.required(),
  GCP_BUCKET_BASE_URL: Joi.required()
});
