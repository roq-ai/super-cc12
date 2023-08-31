import { OrderInterface } from 'interfaces/order';
import { GetQueryInterface } from 'interfaces';

export interface PaymentInterface {
  id?: string;
  payment_date: any;
  payment_amount: number;
  payment_method: string;
  order_id: string;
  created_at?: any;
  updated_at?: any;

  order?: OrderInterface;
  _count?: {};
}

export interface PaymentGetQueryInterface extends GetQueryInterface {
  id?: string;
  payment_method?: string;
  order_id?: string;
}
