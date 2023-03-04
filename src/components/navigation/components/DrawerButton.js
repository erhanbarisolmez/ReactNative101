import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Menu } from '../../../svg/icons'
import { useNavigation } from '@react-navigation/native'
// svg

const DrawerButton = () => {
    const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Menu name = {'menu'}  color='black'/>
    </TouchableOpacity>
  )
}

export default DrawerButton

const styles = StyleSheet.create({})