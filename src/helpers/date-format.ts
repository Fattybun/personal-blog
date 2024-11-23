import dayjs from "dayjs";

export const formatDate = (
  date: string | Date,
  format: "DD MM YYYY" | "DD MMM YYYY" | "DD MMMM YYYY" = "DD MM YYYY"
) => {
  const formats = {
    "DD MM YYYY": "DD MM YYYY",
    "DD MMM YYYY": "DD MMM YYYY",
    "DD MMMM YYYY": "DD MMMM YYYY",
  };

  return dayjs(date).format(formats[format]);
};
