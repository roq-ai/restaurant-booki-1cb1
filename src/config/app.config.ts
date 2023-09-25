interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Chef', 'Waiter'],
  tenantName: 'Restaurant',
  applicationName: 'Restaurant booking engine',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read restaurant information',
    'Read menus',
    'Read table availability',
    'Read reservation details',
  ],
  ownerAbilities: [
    'Manage user information',
    'Manage restaurant details',
    'Manage menu items',
    'Manage reservations and orders',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/05c646c2-e1e4-4725-89f3-3557621599ad',
};
