import * as yup from 'yup';

export const paymentValidationSchema = yup.object().shape({
  payment_date: yup.date().required(),
  payment_amount: yup.number().integer().required(),
  payment_method: yup.string().required(),
  order_id: yup.string().nullable().required(),
});
