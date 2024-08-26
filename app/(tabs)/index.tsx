import { Image, StyleSheet, Platform, Text, View } from 'react-native';

export default function HomeScreen() {
  return(
 <View style={styles.corpo}>
   <Text
          style={{ fontFamily: 'Roboto-Light', marginTop: 20, color: '#fff', fontSize: 20, textAlign: 'center' }}
        >
         Intense Book
        </Text>
</View>

    
  );
}

const styles = StyleSheet.create({
  corpo: {
    backgroundColor: '#592608',
  },
});
