import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import tw from 'twrnc';

export function Button({text, onPress}) {
  return (
    <TouchableOpacity>
      <View>
        <Text>Button</Text>
      </View>
    </TouchableOpacity>
  );
}

export function Input({text, onChange}) {
  return (
    <TextInput
      label="Email"
      value={text}
      onChangeText={(text) => console.log(text)}
    />
  );
}
