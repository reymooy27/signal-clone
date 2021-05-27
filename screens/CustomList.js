import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar, ListItem } from 'react-native-elements'

const CustomList = ({id, title,subtitle, enterChat}) => {
  return (
    <ListItem onPress={()=> enterChat(id, title)} key={id} bottomDivider>
      <Avatar rounded source={{uri: 'https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png'}}/>
      <ListItem.Content>
        <ListItem.Title style={{fontWeight: '800'}}>
          {title}
        </ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode='tail'>
          {subtitle}
        </ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron/>
    </ListItem>
  )
}

export default CustomList

const styles = StyleSheet.create({})
