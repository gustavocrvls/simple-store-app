import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { Button } from '../../components/button';

export function Home() {
  const navigation = useNavigation();

  return (
    <View>
      <Button
        bgColor="teal"
        onPress={() => navigation.navigate('Cart')}
        title="click me"
      />
    </View>
  );
}
