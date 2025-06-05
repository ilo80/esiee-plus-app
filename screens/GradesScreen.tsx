import { View, Text, StyleSheet } from 'react-native';

export default function GradesScreen() {
  return (
    <View style={styles.container}>
      <Text>Grades Screen</Text>
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
