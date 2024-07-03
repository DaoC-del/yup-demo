<template>
  <form @submit.prevent="validateForm" class="space-y-4">
    <div>
      <label for="cardNumber" class="block text-sm font-medium text-gray-700">{{ t('creditCardForm.cardNumber') }}</label>
      <input type="text" id="cardNumber" v-model="cardNumber" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
      <span v-if="errors.cardNumber" class="text-red-600 text-sm">{{ errors.cardNumber }}</span>
    </div>
    <div>
      <label for="cardHolder" class="block text-sm font-medium text-gray-700">{{ t('creditCardForm.cardHolder') }}</label>
      <input type="text" id="cardHolder" v-model="cardHolder" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
      <span v-if="errors.cardHolder" class="text-red-600 text-sm">{{ errors.cardHolder }}</span>
    </div>
    <div>
      <label for="expirationDate" class="block text-sm font-medium text-gray-700">{{ t('creditCardForm.expirationDate') }}</label>
      <input type="text" id="expirationDate" v-model="expirationDate" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
      <span v-if="errors.expirationDate" class="text-red-600 text-sm">{{ errors.expirationDate }}</span>
    </div>
    <div>
      <label for="cvv" class="block text-sm font-medium text-gray-700">{{ t('creditCardForm.cvv') }}</label>
      <input type="text" id="cvv" v-model="cvv" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
      <span v-if="errors.cvv" class="text-red-600 text-sm">{{ errors.cvv }}</span>
    </div>
    <button type="submit" class="mt-4 w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Submit</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { object, string } from 'yup';
import { useField, useForm } from 'vee-validate';

const { t } = useI18n();

const schema = object({
  cardNumber: string().required(t('creditCardForm.errors.required')).matches(/^\d{16}$/, t('creditCardForm.errors.cardNumber')),
  cardHolder: string().required(t('creditCardForm.errors.required')).min(3, t('creditCardForm.errors.cardHolder')),
  expirationDate: string().required(t('creditCardForm.errors.required')).matches(/^\d{2}\/\d{2}$/, t('creditCardForm.errors.expirationDate')),
  cvv: string().required(t('creditCardForm.errors.required')).matches(/^\d{3,4}$/, t('creditCardForm.errors.cvv')),
});

const { handleSubmit, errors } = useForm({
  validationSchema: schema,
});

const { value: cardNumber } = useField('cardNumber');
const { value: cardHolder } = useField('cardHolder');
const { value: expirationDate } = useField('expirationDate');
const { value: cvv } = useField('cvv');

const validateForm = handleSubmit(() => {
  alert('Form Submitted');
});
</script>
