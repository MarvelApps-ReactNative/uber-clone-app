 export const formatTime = (time: Date | undefined) => {
  var hours = time?.getHours();
  var minutes = time?.getMinutes();
  var ampm = '';
  var min;
  if (hours != undefined && minutes != undefined) {
    ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    min = minutes < 10 ? '0' + minutes : minutes;
  }
  var strTime = hours + ':' + min + ' ' + ampm;
  return strTime;
};


