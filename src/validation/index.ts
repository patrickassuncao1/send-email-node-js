import * as yup from 'yup';

export const userSchema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    description: yup.string().required()
})
