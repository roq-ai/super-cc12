import { UserInterface } from 'interfaces/user';
import { MerchantInterface } from 'interfaces/merchant';
import { GetQueryInterface } from 'interfaces';

export interface LoyaltyProgramInterface {
  id?: string;
  program_name: string;
  start_date: any;
  end_date: any;
  user_id: string;
  merchant_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  merchant?: MerchantInterface;
  _count?: {};
}

export interface LoyaltyProgramGetQueryInterface extends GetQueryInterface {
  id?: string;
  program_name?: string;
  user_id?: string;
  merchant_id?: string;
}
