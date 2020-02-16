const code = 
`
#include <iostream>
using namespace std;

int main ( ) {
  //set status to encrypting
  cout << "Encrypting";
 
  //get password
  string password;
  cin >> password;
  

  //display even numbers from 0 -> 100
  for (int i = 0; i < 100; i++) cout << i % 2 == 0 ? i : '' << endl;

  //fetch date and stuff
  time_t t = time(NULL);
  tm* timePtr = localtime(&t);
 
  cout << "seconds= " << (timePtr->tm_sec) << endl;
  cout << "minutes = " << (timePtr->tm_min) << endl;
  cout << "hours = " << (timePtr->tm_hour) << endl;
  cout << "day of month = " << (timePtr->tm_mday) << endl;
  cout << "month of year = " << (timePtr->tm_mon)+1 << endl;
  cout << "year = " << (timePtr->tm_year)+1900 << endl;
  cout << "weekday = " << (timePtr->tm_wday )<< endl;
  cout << "day of year = " << (timePtr->tm_yday )<< endl;
  cout << "daylight savings = " <<(timePtr->tm_isdst )<< endl;
  cout << endl;
  cout << endl;
 
 
  cout << "Date     " <<(timePtr->tm_mday)<<"/"<< (timePtr->tm_mon)+1 <<"/"<< (timePtr->tm_year)+1900<< endl;
  cout << "Time     " << (timePtr->tm_hour)<<":"<< (timePtr->tm_min)<<":"<< (timePtr->tm_sec) << endl;
  return 0;
}
`.split(' ');

var cur = 0

function parser() {
  if (cur >= code.length) cur = 0;
  
  $('#code').text($('#code').text() + " " + code[cur]);
  cur++;
  document.getElementById('code').scrollBy(0, 1000);
}

$(document).on('keydown', parser);

setInterval(() => $('#code').toggleClass('caret'), 500)

var passStats = ['Initializing', 'Decrypting', 'Finding', 'Creating', 'Installing', 'Deleting', 'Updating', 'Removing', 'Destroying', 'Corrupting', 'Breeching'];

setInterval(() => {
  document.getElementById('binSpam').scrollBy(0, 10);
  $('#binSpam').text($('#binSpam').text() + Math.round(Math.random()));
}, 100);

setInterval(() => {
  $('#passStatus').text(
    (document.getElementById('passStatus').innerHTML.includes('/') ? '\\' : '/')
    +
    passStats[Math.floor(Math.random() * passStats.length)]
  );
}, 100);

setInterval(() => $('#innerPassProg').css({ 
  'width': (($('#innerPassProg').width() / $('#innerPassProg').parent().width() * 100) >= 100 
            ? 0 
            : ($('#innerPassProg').width() / $('#innerPassProg').parent().width() * 100)) + 2 + '%'
}), 500);

setInterval(() => {
  $('#wallStatus').text(
    (document.getElementById('wallStatus').innerHTML.includes('/') ? '\\' : '/')
    +
    passStats[Math.floor(Math.random() * passStats.length)]
  );
}, 100);

setInterval(() => $('#innerFirewall').css({ 
  'width': (($('#innerFirewall').width() / $('#innerFirewall').parent().width() * 100) >= 100 
            ? 0 
            : ($('#innerFirewall').width() / $('#innerFirewall').parent().width() * 100)) + 5 + '%'
}), 700);

var chars = ['7', 'e', 'l', '\\', '/', '&', '>', 'M', 'Q', '?', ':', '^', '-', '[', '|', '+', '*', '!'];
setInterval(() => {
  for (let i = 0; i < document.getElementsByClassName('randomLines').length; i++) {
    document.getElementsByClassName('randomLines')[i].innerHTML+=chars[Math.floor(Math.random() * chars.length)] + '\n';
    document.getElementsByClassName('randomLines')[i].scrollBy(0, 10);
  }
}, 10);
