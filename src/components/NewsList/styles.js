import {StyleSheet} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-end',
    },

    tabText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: hp('1.75%'),
    },

    bottomTab: {
        paddingHorizontal: wp('1.0%'),
        paddingTop: hp('1.0%'),
        paddingBottom: hp('0.25%'),
        borderBottomWidth: hp('0.25%'),
    },

    selectedTab: {
        borderBottomColor: 'white',
    },

    unselectedTab: {
        borderBottomColor: 'transparent',
    },
});

export default styles;
