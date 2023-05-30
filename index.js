/* Mask */

var selector = document.querySelector("input[type='tel']");
var im = new Inputmask ("+7 (999)-999-99-99");

im.mask(selector);

/* Validator */


const validation = new JustValidate('.contacts-form', {
  errorLabelStyle: {
    color: '#D11616',
  }
});

validation
  .addField('#name', [
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Имя слишком короткое',
    },
    {
      rule: 'customRegexp',
      value: /[a-z]/gi,
      errorMessage: 'Недопустимый формат',
    },
    {
      rule: 'maxLength',
      value: 30,
    },
    {
        rule: 'required',
        errorMessage: 'Введите имя',
      },
  ])
  .addField('#tel', [
    {
    validator: function(name, value) {
    const phone = selector.inputmask.unmaskedvalue()
    return Number(phone) && phone.length === 10
    },
    errorMessage: 'Номер должен содержать 10 цифр',
    }
    ])