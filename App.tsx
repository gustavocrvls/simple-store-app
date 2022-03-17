import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import { CartProvider } from './src/contexts/cart';
import { Routes } from './src/routes';
import { defaultTheme } from './src/styles/themes';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartProvider>
        <StatusBar style="auto" />
        <Routes />
      </CartProvider>
    </ThemeProvider>
  );
}
