import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Zoo Guide! 🦁</Text>
      <Text style={styles.subtitle}>Your virtual assistant in the zoo.</Text>
      
      <View style={styles.buttonContainer}>
        <Button 
          title="Explore Animals" 
          color="#007AFF"
          onPress={() => navigation.navigate('Animals')} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 20,
    width: '80%',
    borderRadius: 10,
    overflow: 'hidden',
  },
});
