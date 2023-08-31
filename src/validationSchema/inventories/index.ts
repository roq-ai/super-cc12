import * as yup from 'yup';

export const inventoryValidationSchema = yup.object().shape({
  product_name: yup.string().required(),
  quantity: yup.number().integer().required(),
  location: yup.string().required(),
  user_id: yup.string().nullable().required(),
  merchant_id: yup.string().nullable().required(),
});
