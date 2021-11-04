import * as Yup from 'yup';

export const registerRecipeValidationSchema = Yup.object().shape({
  name: Yup.string().required('name is required'),
  preparation: Yup.string().required('preparation is required'),
});