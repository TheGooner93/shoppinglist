import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = props => {
  const {onAddItem = () => {}} = props;
  const [text, setText] = useState('');

  const onPressAddButton = () => {
    if (text) {
      onAddItem(text);
      setText('');
    } else {
      Alert.alert('Error', 'Please enter an item.', {text: 'Ok'});
    }
  };
  return (
    <View>
      <View style={styles.inputWrapperStyle}>
        <TextInput
          placeholder="Add Item..."
          style={styles.inputStyle}
          value={text}
          onChangeText={textValue => setText(textValue)}
        />
      </View>
      <TouchableOpacity style={styles.buttonStyle} onPress={onPressAddButton}>
        <Icon name="plus" size={20} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapperStyle: {
    margin: 6,
    marginTop: 10,
    borderColor: '#c2bad8',
    borderWidth: 1,
    borderRadius: 15,
  },
  inputStyle: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  buttonStyle: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  textStyle: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
    paddingLeft: 10,
    paddingBottom: 1,
  },
});

export default AddItem;
