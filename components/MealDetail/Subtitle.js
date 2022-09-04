import {Text,View,StyleSheet} from 'react-native'

function Subtitle({children}) {
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{children}</Text>
        </View>
    );
}

export default Subtitle;

const styles= StyleSheet.create({
    subtitle: {
        color: '#f4d3a9',
        fontSize: 18,
        fontWeight: 'bold',
        margin: 4,
        textAlign: 'center',
    },
    subtitleContainer:{
        borderBottomColor: '#f4d3a9',
        borderBottomWidth: 2,
        padding: 6,
        marginHorizontal: 12,
        marginBottom: 4
    }
});