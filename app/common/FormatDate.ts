export const formatDate = (date: Date | undefined) => {
  let dateString = date?.toDateString();
  let strings = dateString?.split(' ');
  if (strings != undefined) {
    let newDate = dateString?.replace(strings[3], '');
    return newDate;
  }
  return dateString;
};


