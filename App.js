/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
    Button,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text, TouchableHighlight,
    useColorScheme,
    View,
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const App = () => {
    let state = {iconName: 'thumbs-up'};

    const ChangeColor = (e) => {
        return (
            <View>
                <Icon name={state.iconName} size={70} color="black"/>
                <Text style={{color: 'white'}}>Vote Yes!</Text>
            </View>
        );

    };

    return (
        <View style={{justifyContent: 'center', flex: 0.27, alignItems: 'center'}}>
            <Text>Icon App</Text>
            <Icon name="thumbs-up" size={70} color="black"/>
            <TouchableHighlight onPress={() => state.iconName = 'thumbs-down'} style={styles.btnClickContain}
                                underlayColor={'#3b6486'}>
                <ChangeColor></ChangeColor>
            </TouchableHighlight>
        </View>
    );
};

const styles = StyleSheet.create({
    btnClickContain: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        alignSelf: 'stretch',
        backgroundColor: '#3b5480',
        borderRadius: 5,
        marginTop: 5,
        marginBottom: 5,
    },
    btnContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        alignSelf: 'stretch',
        borderRadius: 10,
    },
    btnIcon: {
        height: 25,
        width: 25,
    },
    btnText: {
        fontSize: 18,
        color: '#FAFAFA',
        marginLeft: 10,
        marginTop: 2,
    },
});
export default App;
