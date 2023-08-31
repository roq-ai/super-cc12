import { PaymentInterface } from 'interfaces/payment';
import { UserInterface } from 'interfaces/user';
import { MerchantInterface } from 'interfaces/merchant';
import { GetQueryInterface } from 'interfaces';

export interface OrderInterface {
  id?: string;
  order_number: string;
  order_date: any;
  total_amount: number;
  user_id: string;
  merchant_id: string;
  created_at?: any;
  updated_at?: any;
  payment?: PaymentInterface[];
  user?: UserInterface;
  merchant?: MerchantInterface;
  _count?: {
    payment?: number;
  };
}

export interface OrderGetQueryInterface extends GetQueryInterface {
  id?: string;
  order_number?: string;
  user_id?: string;
  merchant_id?: string;
}
