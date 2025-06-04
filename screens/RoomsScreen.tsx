import { View, Text, StyleSheet } from 'react-native';

export default function RoomsScreen() {
  return (
    <View style={styles.container}>
      <Text>Available Rooms Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
