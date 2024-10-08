export const convertDate = (date) => {
  const newDate = new Date(date);

  const monthAbbreviation = newDate.toLocaleString("default", {
    month: "short",
  });
  const day = newDate.getDate();
  const year = newDate.getFullYear();

  const formattedDate = `${day} ${monthAbbreviation} ${year}`;
  return formattedDate;
};
