/**
 * Created by iwangx on 16/9/7.
 */
import  {combineReducers} from "redux"
import types from "../../const/user/userTypes"
var initState={
    name:123
};

var todo=function (state=initState,action) {
    var copyState=Object.assign({},state);
    switch (action.type) {
        case types.GET_ALL:
            copyState.name+=1;
            break;
        default:
            return state;
    }
    return copyState;
};

module.exports=combineReducers({todo:todo});