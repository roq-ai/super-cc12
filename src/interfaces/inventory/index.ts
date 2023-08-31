import { UserInterface } from 'interfaces/user';
import { MerchantInterface } from 'interfaces/merchant';
import { GetQueryInterface } from 'interfaces';

export interface InventoryInterface {
  id?: string;
  product_name: string;
  quantity: number;
  location: string;
  user_id: string;
  merchant_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  merchant?: MerchantInterface;
  _count?: {};
}

export interface InventoryGetQueryInterface extends GetQueryInterface {
  id?: string;
  product_name?: string;
  location?: string;
  user_id?: string;
  merchant_id?: string;
}
