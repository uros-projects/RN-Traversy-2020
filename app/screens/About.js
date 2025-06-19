import { Image, StyleSheet, Text, View } from 'react-native';

const About = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>About Page</Text>
			<Image
				source={{ uri: 'https://randomuser.me/api/portraits/man/1.jpg' }}
				style={styles.img}
				alt='About Image'
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 20,
		color: '#333',
	},
	img: {
		width: 100,
		height: 100,
		borderRadius: 100 / 2,
	},
});

export default About;
