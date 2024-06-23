<template>
  <div class="bank-account-form">
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="bankName">銀行名:</label>
        <input id="bankName" v-model="form.bankName" type="text" placeholder="三菱UFJ銀行" />
        <span>{{ errors.bankName }}</span>
      </div>

      <div>
        <label for="accountNumber">口座番号:</label>
        <input id="accountNumber" v-model="form.accountNumber" type="text" placeholder="12345678" />
        <span>{{ errors.accountNumber }}</span>
      </div>

      <button type="submit">送信</button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import * as Yup from 'yup';

// Define the validation schema using Yup
const schema = Yup.object().shape({
  bankName: Yup.string()
    .required('銀行名は必須です')
    .min(2, '銀行名は少なくとも2文字でなければなりません'),
  accountNumber: Yup.string()
    .required('口座番号は必須です')
    .matches(/^\d{8,12}$/, '口座番号は8桁から12桁でなければなりません'),
});

// Define the form data and errors using reactive
const form = reactive({
  bankName: '',
  accountNumber: '',
});

const errors = reactive({
  bankName: '',
  accountNumber: '',
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
      Object.keys(form).forEach(key => {
        form[key] = '';
      });
      Object.keys(errors).forEach(key => {
        errors[key] = '';
      });
    })
    .catch((validationErrors) => {
      // Form is invalid, display validation errors
      validationErrors.inner.forEach(error => {
        errors[error.path] = error.message;
      });
    });
};
</script>

<style>
.bank-account-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.bank-account-form div {
  margin-bottom: 15px;
}

.bank-account-form label {
  display: block;
  margin-bottom: 5px;
}

.bank-account-form input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

.bank-account-form span {
  color: red;
  font-size: 0.9em;
}

.bank-account-form button {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
