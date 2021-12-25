// Creates Date & Time from time-stamps and convert it to string

let ts = Date.now();

let date_time = new Date(ts);
let date = date_time.getDate().toString();
let month = (date_time.getMonth() + 1).toString();
let year = date_time.getFullYear().toString();

module.exports = date.concat('-',month,'-',year) 
