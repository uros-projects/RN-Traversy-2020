import { StyleSheet, View } from 'react-native';
import Header from '../components/Header';

const App = () => {
	return (
		<View style={styles.container}>
			<Header />
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
