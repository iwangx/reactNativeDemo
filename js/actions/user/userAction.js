/**
 * Created by iwangx on 16/9/7.
 */

import types from "../../const/user/userTypes"


module.exports={
    getAll:function () {
        return {type:types.GET_ALL}
    }
};
