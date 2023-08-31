import * as yup from 'yup';

export const orderValidationSchema = yup.object().shape({
  order_number: yup.string().required(),
  order_date: yup.date().required(),
  total_amount: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
  merchant_id: yup.string().nullable().required(),
});
