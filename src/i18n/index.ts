import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    header: 'Header Content',
    step: 'Step Content',
    footer: 'Footer Content',
    creditCardForm: {
      cardNumber: 'Card Number',
      cardHolder: 'Card Holder',
      expirationDate: 'Expiration Date',
      cvv: 'CVV',
      errors: {
        required: 'This field is required',
        cardNumber: 'Card number is invalid',
        cardHolder: 'Card holder name is invalid',
        expirationDate: 'Expiration date is invalid',
        cvv: 'CVV is invalid'
      }
    }
  },
  ja: {
    header: 'ヘッダーの内容',
    step: 'ステップの内容',
    footer: 'フッターの内容',
    creditCardForm: {
      cardNumber: 'カード番号',
      cardHolder: 'カードホルダー',
      expirationDate: '有効期限',
      cvv: 'CVV',
      errors: {
        required: 'このフィールドは必須です',
        cardNumber: 'カード番号が無効です',
        cardHolder: 'カードホルダー名が無効です',
        expirationDate: '有効期限が無効です',
        cvv: 'CVVが無効です'
      }
    }
  }
};

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages,
});

export default i18n;
