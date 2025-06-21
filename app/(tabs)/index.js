import React from 'react';
import { Alert, FlatList, StyleSheet, View } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import AddItem from '../components/AddItem';
import Header from '../components/Header';
import ListItem from '../components/ListItem';

const App = () => {
	const [items, setItems] = React.useState([
		{ id: uuidv4(), name: 'Milk' },
		{ id: uuidv4(), name: 'Eggs' },
		{ id: uuidv4(), name: 'Bread' },
		{ id: uuidv4(), name: 'Juice' },
	]);

	const deleteItem = (id) => {
		setItems((prevItems) => prevItems.filter((item) => item.id !== id));
	};

	const addItem = (text) => {
		if (!text) {
			Alert.alert('Error', 'Please enter an item', [{ text: 'OK' }]);
		} else {
			setItems((prevItems) => {
				return [{ id: uuidv4(), name: text }, ...prevItems];
			});
		}
	};

	return (
		<View style={styles.container}>
			<Header title='Shopping List' />
			<AddItem addItem={addItem} />
			<FlatList
				data={items}
				renderItem={({ item }) => (
					<ListItem item={item} deleteItem={deleteItem} />
				)}
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
