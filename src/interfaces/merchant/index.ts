import { InventoryInterface } from 'interfaces/inventory';
import { LoyaltyProgramInterface } from 'interfaces/loyalty-program';
import { OrderInterface } from 'interfaces/order';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface MerchantInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  inventory?: InventoryInterface[];
  loyalty_program?: LoyaltyProgramInterface[];
  order?: OrderInterface[];
  user?: UserInterface;
  _count?: {
    inventory?: number;
    loyalty_program?: number;
    order?: number;
  };
}

export interface MerchantGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
