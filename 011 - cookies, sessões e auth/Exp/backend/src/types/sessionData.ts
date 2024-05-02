type cartProduct = {
    productId: string;
    quantity: number;
    };

export interface MySessionData {
    uid: string;
    roleId: string;
    cart: cartProduct[];
  }
