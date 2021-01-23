import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Linking, StyleSheet, Text, View } from 'react-native';

export default function App() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Hello World</Text>
			<Button
				title='CHECK OUT MY GITHUB'
				color={'#141414'}
				onPress={() => {
					Linking.openURL('https://github.com/bitoffabyte');
				}}
			></Button>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		margin: 10,
	},
	btn: {
		color: 'red',
	},
});
