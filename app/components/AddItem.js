import { useState } from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AddItem = ({ addItem }) => {
	const [text, setText] = useState('');

	const onChange = (value) => {
		setText(value);
	};

	return (
		<View>
			<TextInput
				placeholder='Add Item...'
				style={styles.input}
				onChangeText={onChange}
			/>
			<TouchableOpacity style={styles.btn} onPress={() => addItem(text)}>
				<Text style={styles.btnText}>
					<Icon name='plus' size={20} color='darkslateblue' /> Add Item
				</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	input: {
		height: 60,
		padding: 8,
		fontSize: 16,
	},
	btn: {
		backgroundColor: '#c2bad8',
		padding: 9,
		margin: 5,
	},
	btnText: {
		color: 'darkslateblue',
		fontSize: 20,
		textAlign: 'center',
	},
});

export default AddItem;
