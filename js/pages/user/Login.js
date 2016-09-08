/**
 * Created by iwangx on 16/9/7.
 */
import React from "react"
import {
    Text,
    View,
    Platform,
    TextInput,
    Image,
    AlertIOS,
} from "react-native"
import style from "./Login.style"


var Login = React.createClass({

    press:function () {
        this.props.router.toRegister();
    },

    render:function () {
        return (
            <View >
                <Text onPress={this.press} style={{lineHeight:100}}>asdasdasdsdasd</Text>
            </View>
        )
    }
});

module.exports=Login;