import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, UIManager } from 'react-native'
import Main from './home/containers/Main'

UIManager.setLayoutAnimationEnabledExperimental &&
	UIManager.setLayoutAnimationEnabledExperimental(true)

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar
				backgroundColor="transparent"
				animated={true}
				translucent={true}
				barStyle="light-content"
			/>
			<Main />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
