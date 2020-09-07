import DateDropdown from './date-dropdown';
import bookingInstances from '../booking/booking-inits';
import controlButtonArr from '../control-button/control-button-init';

$(document).ready(() => {
  const $datepickerSingle = $('.js-date-dropdown__filter');
  $.each($datepickerSingle, (key, item) => {
    new DateDropdown(item, true, controlButtonArr);
  });

  const $datepickerRight = $('.js-date-dropdown__input-right');
  const $datepickerLeft = $('.js-date-dropdown__input-left');

  $.each($datepickerLeft, (key, item) => {
    if ($(item).closest('.js-booking').length > 0) {
      new DateDropdown([item, $datepickerRight[key]], false, controlButtonArr, bookingInstances[0]);
    } else {
      new DateDropdown([item, $datepickerRight[key]], false, controlButtonArr);
    }
  });

  const $inlineDatepicker = $('.js-date-dropdown__datepicker_inline').datepicker({
    language: 'ru',
    minDate: new Date(),
    range: true,
    multipleDays: 2,
    multipleDatesSeparator: ' - ',
    inline: true,
    prevHtml: 'arrow_back',
    nextHtml: 'arrow_forward',
    toggleSelected: true,
    dateFormat: 'dd M',
    navTitles: {
      days: 'MM yyyy',
    },
  }).data('datepicker');
});
