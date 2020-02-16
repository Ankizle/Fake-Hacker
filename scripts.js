setInterval(() => document.getElementById('code').innerHTML = document.getElementById('code').innerHTML == '' ? '|' : '', 500)

setInterval(() => {
  document.getElementById('binSpam').scrollBy(0, 1);
  $('#binSpam').text($('#binSpam').text() + Math.round(Math.random()));
}, 1)

