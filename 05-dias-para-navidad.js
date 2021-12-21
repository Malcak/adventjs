function daysToXmas(date) {
  return Math.ceil((new Date('Dec 25, 2021') - date)/(1000*60*60*24))
}