<template>
  <div class="user-info-form">
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="fullName">氏名:</label>
        <input id="fullName" v-model="form.fullName" type="text" placeholder="山田 太郎" />
        <span>{{ errors.fullName }}</span>
      </div>

      <div>
        <label for="birthDate">生年月日:</label>
        <input id="birthDate" v-model="form.birthDate" type="date" />
        <span>{{ errors.birthDate }}</span>
      </div>

      <div>
        <label for="email">メールアドレス:</label>
        <input id="email" v-model="form.email" type="email" placeholder="example@example.com" />
        <span>{{ errors.email }}</span>
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
  fullName: Yup.string()
      .required('氏名は必須です')
      .min(2, '氏名は少なくとも2文字でなければなりません'),
  birthDate: Yup.date()
      .required('生年月日は必須です')
      .max(new Date(), '生年月日は過去の日付でなければなりません'),
  email: Yup.string()
      .required('メールアドレスは必須です')
      .email('有効なメールアドレスを入力してください'),
});

// Define the form data and errors using reactive
const form = reactive({
  fullName: '',
  birthDate: '',
  email: '',
});

const errors = reactive({
  fullName: '',
  birthDate: '',
  email: '',
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
.user-info-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.user-info-form div {
  margin-bottom: 15px;
}

.user-info-form label {
  display: block;
  margin-bottom: 5px;
}

.user-info-form input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

.user-info-form span {
  color: red;
  font-size: 0.9em;
}

.user-info-form button {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
