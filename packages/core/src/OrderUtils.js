export const OrderUtils = {
  status: {
    inCart: {
      value: 'In Cart',
      description: 'The item is still in cart',
      sort: 0,
      color: '#7f8692',
    },
    inOrder: {
      value: 'In Order',
      description: 'The customer agrees with the order',
      sort: 1,
      color: '#1881d6',
    },
    inProcess: {
      value: 'In Process',
      description: 'The order is still being process/prepared',
      sort: 2,
      color: '#d9ca3f',
    },
    paid: {
      value: 'Paid',
      description: 'The order was paid by the customer',
      sort: 3,
      color: '#4a2b94',
    },

    inShipping: {
      value: 'Shipping',
      description: 'The order is being shipped',
      sort: 4,
      color: '#d77f38',
    },
    received: {
      value: 'Received',
      description: 'The order was received by the customer',
      sort: 5,
      color: '#33942b',
    },

    cancelled: {
      value: 'Cancelled',
      description: 'The order was cancelled by the customer or admin',
      sort: 6,
      color: '#252b25',
    },
  },
}
