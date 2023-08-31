const mapping: Record<string, string> = {
  inventories: 'inventory',
  'loyalty-programs': 'loyalty_program',
  merchants: 'merchant',
  orders: 'order',
  payments: 'payment',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
