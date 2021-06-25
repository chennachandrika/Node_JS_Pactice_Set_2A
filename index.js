// const { addDays, format } = require("date-fns");
// const add_days_to_date = function (given_days) {
//   const result = addDays(new Date(2020, 7, 22), given_days);
//   //   return format(result, "dd-MM-yyyy");
//   return `${result.getDate()}-${result.getMonth() + 1}-${result.getFullYear()}`;
// };
// console.log(add_days_to_date(3));
// module.exports = add_days_to_date;
const addDays = require("date-fns/addDays");

const date = (days) => {
  const newDate = addDays(new Date(2020, 7, 22), days);
  return `${newDate.getDate()}-${
    newDate.getMonth() + 1
  }-${newDate.getFullYear()}`;
};
console.log(date(3));
module.exports = date;
