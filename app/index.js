import { Text, View, Image, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import { Link } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export default function Index() {
  return (
    <body
    color=""
    >
      <View style={styles.overlayOne}>

        <Text
          style={{ fontFamily: 'Roboto-Light', marginBottom: 20, marginTop: 20, color: '#fff', fontSize: 20 }}
        >
          Coffee With Programation
        </Text>

        <Image
          style={{
            width: 300,
            height: 300,
            borderRadius: 300,
            opacity: 1
          }}
          source={require('../assets/images/icon.jpg')}
        />

        <Text

          style={{ marginBottom: 20, marginTop: 20, color: '#fff', fontSize: 20 }}>
          <Icon name="coffee" size={30} color="#fff" /> <Icon name="code" size={20} color="#fff" /> print, function
        </Text>

        <Link href="/products" style={[styles.button, styles.backgroundSecond]} asChild>
          <TouchableOpacity>
            <Text style={styles.buttonOneText}>
              Cafés
            </Text>
          </TouchableOpacity>
        </Link>

        <Link href="/about" style={[styles.button, styles.backgroundSecond]} asChild>
          <TouchableOpacity>
            <Text style={styles.buttonOneText}>
              Sobre o App
            </Text>
          </TouchableOpacity>
        </Link>

        <Link href="/languages" style={[styles.button, styles.backgroundSecond]} asChild>
          <TouchableOpacity>
            <Text style={styles.buttonOneText}>
              Linguagens
            </Text>
          </TouchableOpacity>
        </Link>

      </View>
    </body>

  );
}

// const styles = StyleSheet.create({
//   button: {
//     display: 'flex',
//   },
// });
