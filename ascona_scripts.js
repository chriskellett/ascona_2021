$(document).ready( function () {
  vacNumber = $('[data-name=job_title]').length;
  $('.vac-count').text(vacNumber);
});
$(document).ready( function () {
  locNumber = $('[data-name=loc_title]').length;
  $('[data-name=loc_count]').text(locNumber);
});
