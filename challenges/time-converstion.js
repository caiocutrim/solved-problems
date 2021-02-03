
function timeConversion(s) {
  /*
   * Write your code here.
   */
  const time = `${s.slice(0, s.length - 2)} ${s.slice(-2)}`;
  const d = new Date(`${time}`);

  return new Intl.DateTimeFormat('en-US', {
    hour12: false,
    hour: 'numeric', minute: 'numeric', second: 'numeric',
    timeStyle: 'medium'
  }).format(d)
}

console.log(timeConversion('07:32:45PM'))