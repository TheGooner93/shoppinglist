import React, {useState} from 'react';
import {View, StyleSheet, FlatList, StatusBar} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

import Header from './components/Common/Header';
import List from './components/List';
import AddItem from './components/List/AddItem';

const STATUSBAR_HEIGHT = getStatusBarHeight();

const App = () => {
  const [items, setItems] = useState([
    {
      id: Math.random(),
      text: 'milk',
    },
    {
      id: Math.random(),
      text: 'eggs',
    },
    {
      id: Math.random(),
      text: 'bread',
    },
    {
      id: Math.random(),
      text: 'juice',
    },
  ]);

  const onDeleteItem = id => {
    setItems(prevItems =>
      prevItems.filter(({id: prevItemId}) => id !== prevItemId),
    );
  };

  const onAddItem = text => {
    setItems(prevItems => [
      ...prevItems,
      {
        id: Math.random(),
        text,
      },
    ]);
  };

  const statusBarView = (
    <View style={styles.statusBar}>
      <StatusBar translucent backgroundColor="purple" />
    </View>
  );

  return (
    <View style={styles.container}>
      {statusBarView}
      <Header title={'Shop Lister'} />
      <AddItem onAddItem={onAddItem} />
      <List items={items} onDeleteItem={onDeleteItem} />
    </View>
  );
};

Header.defaultProps = {
  title: 'Boooop',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
    backgroundColor: 'darkslateblue',
  },
});

export default App;
