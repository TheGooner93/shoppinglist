import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const tempHeightValue = new Animated.Value(0);

const ListItem = props => {
  const {
    item: {text = '', id = ''},
    onDeleteItem = () => {},
  } = props;

  const [scaleValue] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(scaleValue, {
      toValue: scaleValue === 0.9 ? 0 : 1,
      duration: 500,
      useNativeDriver: true,
      easing: Easing.in,
    }).start();
  }, [scaleValue]);

  const onRemoveItem = () => {
    Animated.timing(scaleValue, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
      easing: Easing.ease,
    }).start(() => onDeleteItem(id));
  };

  return (
    <Animated.View
      style={[
        styles.listItemContainerStyle,
        {
          transform: [{scale: scaleValue}],
        },
      ]}>
      <View style={styles.listItemWrapperStyle}>
        <Text style={styles.listItemTextStyle}>{text}</Text>
        <Icon
          name="remove"
          size={20}
          color={'firebrick'}
          onPress={onRemoveItem}
        />
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  listItemContainerStyle: {
    padding: 15,
    backgroundColor: 'lightgrey',
    borderBottomWidth: 1,
    borderColor: '#eee',
    margin: 5,
    borderRadius: 10,
    // height: tempHeightValue.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: [0, 10],
    //   extrapolate: 'clamp',
    // }),
  },
  listItemWrapperStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemTextStyle: {
    fontSize: 18,
  },
});

export default ListItem;
