import React, {Component} from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import NavigationService from '../Service/navigationService';
import {NAV_TYPES} from '../Navigation/navTypes';
import tw from 'twrnc';
import auth from '@react-native-firebase/auth';

export default class Login extends Component {
  constructor(prop) {
    super(prop);
    this.state = {};
  }

  UNSAFE_componentWillReceiveProps(nextProps) {}

  render() {
    return (
      <View style={{height: '100%', justifyContent: 'center'}}>
        <Text style={{textAlign: 'center'}}>Login</Text>
        <TouchableOpacity
          onPress={() => NavigationService.navigate(NAV_TYPES.CORE)}>
          <Text style={{textAlign: 'center', color: 'green', fontSize: 18}}>
            Click to go home page
          </Text>
        </TouchableOpacity>
        <View style={tw`bg-blue-100`}>
          <Text style={tw.style('text-md', 'invalid' && 'text-red-500')}>
            Hello
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({});
