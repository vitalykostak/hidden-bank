import axios from 'axios';

const baseURL = 'https://bank.gov.ua/NBU_Exchange';

export const $currencyApi = axios.create({
  baseURL,
});
