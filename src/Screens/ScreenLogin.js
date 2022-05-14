import React,{Component} from 'react'
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native'
import NavigationService from '../Service/navigationService'
import {NAV_TYPES} from '../Navigation/navTypes'
export default class Login extends Component{
    constructor(prop){
        super(prop)
        this.state={
           
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        
    }
    
    render(){
        return(
            <View style={{height: '100%', justifyContent: 'center'}}>
                <Text  style={{textAlign:'center'}}>Login</Text>
                <TouchableOpacity onPress={() => NavigationService.navigate(NAV_TYPES.CORE)}>
                    <Text style={{textAlign:'center', color:'green', fontSize:18}}>Click to go home page</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
  
})