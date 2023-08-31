import * as yup from 'yup';

export const loyaltyProgramValidationSchema = yup.object().shape({
  program_name: yup.string().required(),
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  user_id: yup.string().nullable().required(),
  merchant_id: yup.string().nullable().required(),
});
