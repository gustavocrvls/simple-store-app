import { Text, View } from 'react-native';
import { useCartContext } from '../../contexts/cart/cart';

export function Home() {
  const { items } = useCartContext();
  return (
    <View>
      <Text>Items - {items.length}</Text>
    </View>
  );
}
