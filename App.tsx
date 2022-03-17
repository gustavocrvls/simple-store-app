import { StatusBar } from 'expo-status-bar';
import { CartProvider } from './src/contexts/cart';
import { Routes } from './src/routes';

export default function App() {
  return (
    <CartProvider>
      <StatusBar style="auto" />
      <Routes />
    </CartProvider>
  );
}
