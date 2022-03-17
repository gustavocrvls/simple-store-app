import { ReactNode } from 'react';

export interface CartProviderProps {
  children: ReactNode;
}

export type CartContextData = {
  items: any[];
};
