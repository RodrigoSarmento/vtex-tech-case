export const base64Code =
  'cm9kcmlnb3Nhcm1lbnRveHhAZ21haWwuY29tL3Rva2VuOmRsM1YyWmxOd0FzT2V1bU9CYVluZVpZbVptSzlwQUFaclRNZ2h4bTQ=';
export const oauth =
  'dea5b093208f09bf4ddabc89e7eddcf093f428586ea1362c5bfa4ee965e0a4c6';

export const subjectFieldId = 22696838752283;
export const accountNameFieldId = 22713149051931;
export const emailFieldId = 22713719687067;

export const subjects = [
  {
    name: 'Orders',
    tag: 'orders',
    fields: [
      {
        name: 'Order number',
        type: 'number',
        zendeskId: 22637033075611,
        parent: 'orders',
      },
      {
        name: 'Affecting all users?',
        type: 'boolean',
        zendeskId: 22637064733595,
        parent: 'orders',
      },
    ],
  },
  {
    name: 'Payments',
    tag: 'payments',
    fields: [
      {
        name: 'Transaction number',
        type: 'number',
        zendeskId: 22637071175963,
        parent: 'payments',
      },
      {
        name: 'Transaction status',
        type: 'dropdown',
        zendeskId: 22637066511899,
        parent: 'payments',
        dropDownItems: [
          { name: 'Authorized', tag: 'authorized' },
          { name: 'Approved', tag: 'approved' },
          { name: 'Rejected', tag: 'rejected' },
        ],
      },
      {
        name: 'Payment Acquirer',
        tag: 'dropdown',
        zendeskId: 22637088594075,
        parent: 'payments',
        dropDownItems: [
          { name: 'Visa', tag: 'visa' },
          { name: 'Master', tag: 'master' },
        ],
      },
    ],
  },
  {
    name: 'Catalog',
    tag: 'catalog',
    fields: [
      {
        name: 'SkuId',
        type: 'number',
        zendeskId: 22637079006875,
        parent: 'catalog',
      },
      {
        name: 'Print of the page',
        type: 'image',
        zendeskId: 0,
        parent: 'catalog',
      },
    ],
  },
  { name: 'Others', tag: 'others', fields: [] },
] as ISubject[];
