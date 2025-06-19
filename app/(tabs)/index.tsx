import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import Header from '../components/Header';
import ListItem from '../components/ListItem';

const App = () => {
	const [items, setItems] = React.useState([
		{ id: uuidv4(), name: 'Milk' },
		{ id: uuidv4(), name: 'Eggs' },
		{ id: uuidv4(), name: 'Bread' },
		{ id: uuidv4(), name: 'Juice' },
	]);

	return (
		<View style={styles.container}>
			<Header title='Shopping List' />
			<FlatList
				data={items}
				renderItem={({ item }) => <ListItem item={item} />}
				// keyExtractor={}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 60,
	},
	text: {
		color: 'white',
		fontSize: 23,
		textAlign: 'center',
	},
});

export default App;
