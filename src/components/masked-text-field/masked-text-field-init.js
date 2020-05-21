import {MaskedField} from "./masked-text-field";
$(document).ready(function() {
  const arrayMaskedTextField = $('.js-masked-text-field');
  $.each(arrayMaskedTextField, (key, item) => {
    new MaskedField(item, key);
  })
})