import { item } from './item'
export interface invoice {
    id: string,
    createdAt: string,
    paymentDue: string,
    description: string,
    paymentTerms: number,
    clientName: string,
    clientEmail: string,
    status: string,
    senderAddress: {
      street: string,
      city: string,
      postCode: string | number,
      country: string
    },
    clientAddress: {
      street: string,
      city: string,
      postCode: string,
      country: string
    },
    items: item[],
    total: number
}