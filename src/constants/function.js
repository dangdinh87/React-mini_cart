export const formatMoney = (number) => {
    return number.toFixed(0).replace(/(\d)(?=(\d{3})+$)/g, "$1,");
};