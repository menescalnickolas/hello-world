import { StyleSheet, TextInput, View, Text, Alert, Button, ScrollView } from 'react-native';
import { useState } from 'react';

const App = () => {

  const [text, setText] = useState('');

  const alertMyText = () => {
    Alert.alert(text);
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={text}
        onChangeText={setText}
        placeholder='What is your name?'
      />

      <Text style={styles.textDisplay}>Your name is: {text}</Text>

      <Button
        onPress={() => {
          alertMyText();
        }}
        title="Press Me"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  textInput: {
    width: '88%',
    borderWidth: 1,
    height: 50,
    padding: 10
  },

  textDisplay: {
    height: 50,
    lineHeight: 50
  }

});

export default App;