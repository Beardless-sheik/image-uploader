// Creates Date & Time from time-stamps and convert it to string

class localDate {
	getCurrentDate() {
		let ts = Date.now();
		let date_time = new Date(ts);
		let date = date_time.getDate().toString();
		let month = (date_time.getMonth() + 1).toString();
		let year = date_time.getFullYear().toString();
		return date.concat('-',month,'-',year)
	}
}

module.exports = {localDate};
