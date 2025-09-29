import createHttpError from 'http-errors';

export const validateBody = (schema) => async (req, res, next) => {
  try {
    const value = await schema.validateAsync(req.body, { abortEarly: false });
    req.body = value; // <--- обов'язково записуємо валідовані дані назад у req.body
    next();
  } catch (err) {
    const messages = err.details.map((detail) => detail.message);
    const error = createHttpError(
      400,
      `Validation error: ${messages.join(', ')}`,
    );
    next(error);
  }
};
