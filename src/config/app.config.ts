interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Owner', 'Manager', 'Cashier', 'Inventory Manager'],
  tenantName: 'Merchant',
  applicationName: 'Super',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Register and manage restaurant on the platform',
    'Manage multiple user roles',
    'Run loyalty and marketing programs',
    "Deactivate or delete restaurant's account",
  ],
};
