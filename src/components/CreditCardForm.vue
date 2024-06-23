<template>
  <div class="credit-card-form">
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="cardNumber">カード番号:</label>
        <input id="cardNumber" v-model="form.cardNumber" type="text" />
        <span>{{ errors.cardNumber }}</span>
      </div>

      <div>
        <label for="expiryDate">有効期限:</label>
        <input id="expiryDate" v-model="form.expiryDate" type="text" />
        <span>{{ errors.expiryDate }}</span>
      </div>

      <div>
        <label for="cvv">CVV:</label>
        <input id="cvv" v-model="form.cvv" type="text" />
        <span>{{ errors.cvv }}</span>
      </div>

      <div>
        <label for="cardHolderName">カード名義人:</label>
        <input id="cardHolderName" v-model="form.cardHolderName" type="text" />
        <span>{{ errors.cardHolderName }}</span>
      </div>

      <button type="submit">送信</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import * as Yup from 'yup';

interface Form {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardHolderName: string;
}

interface Errors {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardHolderName: string;
}

// Define the validation schema using Yup
const schema = Yup.object().shape({
  cardNumber: Yup.string()
      .required('カード番号は必須です')
      .matches(/^\d{16}$/, 'カード番号は16桁でなければなりません'),
  expiryDate: Yup.string()
      .required('有効期限は必須です')
      .matches(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/, '有効期限はMM/YY形式でなければなりません'),
  cvv: Yup.string()
      .required('CVVは必須です')
      .matches(/^\d{3,4}$/, 'CVVは3桁または4桁でなければなりません'),
  cardHolderName: Yup.string()
      .required('カード名義人は必須です')
      .min(2, 'カード名義人は少なくとも2文字でなければなりません')
});

// Define the form data and errors using reactive
const form = reactive<Form>({
  cardNumber: '',
  expiryDate: '',
  cvv: '',
  cardHolderName: ''
});

const errors = reactive<Errors>({
  cardNumber: '',
  expiryDate: '',
  cvv: '',
  cardHolderName: ''
});

// Function to handle form submission
const handleSubmit = () => {
  // Validate the form data using Yup schema
  schema
      .validate(form, { abortEarly: false })
      .then(() => {
        // Form is valid, proceed with form submission logic
        console.log('Form submitted successfully', form);
        // Reset form and errors
        Object.keys(form).forEach((key) => {
          form[key as keyof Form] = '';
        });
        Object.keys(errors).forEach((key) => {
          errors[key as keyof Errors] = '';
        });
      })
      .catch((validationErrors) => {
        // Form is invalid, display validation errors
        validationErrors.inner.forEach((error: Yup.ValidationError) => {
          errors[error.path as keyof Errors] = error.message;
        });
      });
};
</script>

<style>
.credit-card-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.credit-card-form div {
  margin-bottom: 15px;
}

.credit-card-form label {
  display: block;
  margin-bottom: 5px;
}

.credit-card-form input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

.credit-card-form span {
  color: red;
  font-size: 0.9em;
}

.credit-card-form button {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
