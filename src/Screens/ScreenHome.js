import React, {Component} from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import NavigationService from '../Service/navigationService';
import {NAV_TYPES} from '../Navigation/navTypes';
export default class Home extends Component {
  constructor(prop) {
    super(prop);
    this.state = {};
  }

  componentDidMount() {}
  UNSAFE_componentWillReceiveProps(nextProps) {}
  render() {
    return (
      <View style={{height: '100%', justifyContent: 'center'}}>
        <Text style={{textAlign: 'center'}}>Login</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({});
