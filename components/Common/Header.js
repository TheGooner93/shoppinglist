import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';

const APPBAR_HEIGHT = Platform.OS === 'ios' ? 60 : 56;

const Header = props => {
  const {title} = props;
  return (
    <View style={styles.headerStyle}>
      <Text style={styles.textStyle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    height: APPBAR_HEIGHT,
    padding: 15,
    backgroundColor: 'darkslateblue',
  },
  textStyle: {
    color: 'white',
    fontSize: 23,
    textAlign: 'center',
  },
});

export default Header;
