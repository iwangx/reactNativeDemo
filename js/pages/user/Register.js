/**
 * Created by iwangx on 16/9/7.
 */
import  React from "react"
import {
    View,
    Text
} from "react-native"

import bindRedux from "../../utils/ConnectRedux"
import action from "../../actions/user/userAction"
import reducer from "../../reducers/user/userReducer"

var Register =React.createClass({

    press:function () {
        //debugger
        router.pop();
        var actions=this.props.actions;
        actions.getAll();
    },

    render:function () {
        var todo=this.props.todo;
        return (
            <View>
                <Text onPress={this.press} style={{lineHeight:300}}>{todo.name}</Text>
            </View>
        )
    }
});

module.exports=bindRedux(Register,reducer,action);
//module.exports=Register;