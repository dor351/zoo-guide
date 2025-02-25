import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const animals = [
  { id: '1', name: 'Lion', image: require('../../assets/animals/lion.png') },
  { id: '2', name: 'Elephant', image: require('../../assets/animals/elephant.png') },
  { id: '3', name: 'Zebra', image: require('../../assets/animals/zebra.png') },
  { id: '4', name: 'Monkey', image: require('../../assets/animals/monkey.png') },
  { id: '5', name: 'Parrot', image: require('../../assets/animals/parrot.png') },
  { id: '6', name: 'Snake', image: require('../../assets/animals/snake.png') },
];

export default function AnimalsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Animals in the Zoo</Text>
      <FlatList
        data={animals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.animalCard}>
            <Image source={item.image} style={styles.animalImage} />
            <Text style={styles.animalText}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  animalCard: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  animalImage: {
    width: 80, // גודל התמונה
    height: 80, // גודל התמונה
    marginRight: 15,
    borderRadius: 10, // עיגול פינות לתמונה
  },
  animalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});
