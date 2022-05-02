import React, { useState } from 'react';
import { SafeAreaView, Text, View, TextInput, Button, Alert } from 'react-native';
import style from './src/style';
import palindrome from './src/palindrome';

const App = () => {
  const [title, setTitle] = useState('Type a word:');

  function palindromeChecker(props) {
    const { nativeEvent: { text } } = props;
    const result = palindrome(text);
    setTitle(result);
  }

  function whatIsPalindrome() {
    Alert.alert("Help", "A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.")
    setTitle('Type a word:');
  }

  return (
    <SafeAreaView style={style.page} >
      <Text style={style.text}>{title}</Text>
      <TextInput
        style={style.textInput}
        onSubmitEditing={palindromeChecker}
        placeholder='Type here'
      />

      <View style={{ paddingTop: 200 }}>
        <Button
          title="What is a palindrome?"
          onPress={whatIsPalindrome} />
      </View>
    </SafeAreaView>
  )
};

export default App;
