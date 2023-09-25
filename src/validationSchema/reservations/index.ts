import * as yup from 'yup';

export const reservationValidationSchema = yup.object().shape({
  start_time: yup.date().required(),
  end_time: yup.date().required(),
  number_of_people: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
  table_id: yup.string().nullable().required(),
});
