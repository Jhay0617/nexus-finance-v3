export const formatCurrency = (value) => {
  return new Intl.NumberFormat("fil-PH", {
    style: "currency",
    currency: "PHP",
  }).format(value);
};

export const ledgerReducer = (arr) => {
  const result = arr?.reduce(
    (acc, cur) => {
      if (cur.category?.type === "income") {
        acc.income += cur.amount;
      } else if (cur.category?.type === "expense") {
        acc.expense += cur.amount;
      }

      return acc;
    },
    { income: 0, expense: 0 }
  );

  return result;
};

export const dateFormat = (timeStamp) => {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    day: "numeric",
    month: "long",
  }).format(timeStamp);
};
