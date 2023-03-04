import { Image, StyleSheet } from 'react-native'
import React from 'react'

const HeaderLogo = () => {
  return (
    <Image
    style={{ width: 50, height: 50 }}
    source={require("../components/assets/logo.png")}
  />
  )
}

export default HeaderLogo

const styles = StyleSheet.create({})