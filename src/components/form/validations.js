import {object, ref, string} from 'yup';

const messages = {
    required: "Bu alan zorunludur.",
    email: "Geçerli bir mail adresi girin!",
    min: "En az 5 karakter olmalı!",
}

const validations = object().shape({
  username: string().required(messages.required),
  email: string().email(messages.email).required(messages.required),
  password: string().min(5, messages.min).required(messages.required),
  passwordConfirm: string()
  .oneOf([ref('password')], 'Parolar uyuşmuyor!')
  .required(messages.required),
});

export default validations;
