import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
  configure,
} from 'vee-validate';
import {
  required,
  min,
  max,
  alpha_spaces as alphaSpaces,
  email,
  min_value as minVal,
  max_value as maxVal,
  confirmed,
  not_one_of as excluded,
} from '@vee-validate/rules';

export default {
  install(app) {
    app.component('VeeForm', VeeForm);
    app.component('VeeField', VeeField);
    app.component('ErrorMessage', ErrorMessage);

    defineRule('required', required);
    defineRule('tos', required);
    defineRule('min', min);
    defineRule('max', max);
    defineRule('alpha_spaces', alphaSpaces);
    defineRule('email', email);
    defineRule('min_value', minVal);
    defineRule('max_value', maxVal);
    defineRule('passwords_mismatch', confirmed);
    defineRule('excluded', excluded);
    defineRule('country_excluded', excluded);

    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `The ${ctx.field} field is required.`,
          min: `The ${ctx.field} field is too short.`,
          max: `The ${ctx.field} field  is too long.`,
          alpha_spaces: `The ${ctx.field} field may only contain alphabetical characters and spaces.`,
          email: `Please enter a valid ${ctx.field}.`,
          min_value: `The minimum ${ctx.field} limit is too low.`,
          max_value: `The maximum ${ctx.field} limit is too high.`,
          excluded: `The selected ${ctx.field} is not available at this time.`,
          country_excluded:
            'Due to restrictions, we are unable to accept users from this location.',
          passwords_mismatch: 'Please make sure your passwords match.',
          tos: 'You must accept the Terms of Service before continuing.',
        };

        const message = messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : `The field ${ctx.field} is invalid.`;

        return message;
      },
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true,
    });
  },
};
