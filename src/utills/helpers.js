export const formatPrice = (number) => {
  // Format angka dengan format mata uang tanpa desimal
  const formattedNumber = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0, // Set minimum digit desimal menjadi 0
    maximumFractionDigits: 0, // Set maximum digit desimal menjadi 0
  }).format(number);

  // Hilangkan digit nol di belakang koma
  const trimmedNumber = formattedNumber.replace(/,00$/, "");

  return trimmedNumber;
};
