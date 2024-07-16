export const dateStringToDate = (dateString: string): Date => {
  // 10/08/2018 => ['10', '08', '2018']
  const dateParts = dateString.split('/').map((item: string): number => {
    return parseInt(item);
  });

  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
