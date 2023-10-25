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
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'Inventory Manager', 'Sales Representative'],
  tenantName: 'Company',
  applicationName: 'Inventory Management System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View products', 'Place orders', 'View orders', 'Edit personal information'],
  ownerAbilities: ['Manage users', 'Manage companies', 'Manage products', 'Manage orders'],
  getQuoteUrl: 'https://roq-wizzard-git-qa03-roqtech.vercel.app/proposal/a91853ff-ddc8-4998-8c28-4c12cc4f1a2a',
};
