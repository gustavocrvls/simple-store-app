import { createContext, useContext, useMemo } from 'react';
import { CartContextData, CartProviderProps } from './cart.dto';

export const CartContext = createContext({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
  const value = useMemo(() => ({ items: [] }), []);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCartContext() {
  return useContext(CartContext);
}
