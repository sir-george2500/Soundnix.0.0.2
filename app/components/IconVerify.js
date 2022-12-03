import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from "@expo/vector-icons";

function IconVerify( {style ,iconColor,IconName,IconSize}) {
  return (  
      <View style={[style]}>
        <MaterialCommunityIcons
                    color={iconColor}
                    name={IconName}
                    size={IconSize}
                  />     
    </View>
  )
}

export default IconVerify;

const styles = StyleSheet.create({})