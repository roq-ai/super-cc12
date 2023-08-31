import axios from 'axios';
import queryString from 'query-string';
import { PaymentInterface, PaymentGetQueryInterface } from 'interfaces/payment';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getPayments = async (query?: PaymentGetQueryInterface): Promise<PaginatedInterface<PaymentInterface>> => {
  const response = await axios.get('/api/payments', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createPayment = async (payment: PaymentInterface) => {
  const response = await axios.post('/api/payments', payment);
  return response.data;
};

export const updatePaymentById = async (id: string, payment: PaymentInterface) => {
  const response = await axios.put(`/api/payments/${id}`, payment);
  return response.data;
};

export const getPaymentById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/payments/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deletePaymentById = async (id: string) => {
  const response = await axios.delete(`/api/payments/${id}`);
  return response.data;
};
