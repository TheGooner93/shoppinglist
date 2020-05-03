import React from 'react';
import {View, FlatList} from 'react-native';

import ListItem from './ListItem';

const ListView = props => {
  const {items = [], onDeleteItem = () => {}} = props;

  return (
    <FlatList
      data={items}
      renderItem={({item}) => (
        <View>
          <ListItem item={item} onDeleteItem={onDeleteItem} />
        </View>
      )}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default ListView;
