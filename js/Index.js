/**
 * Created by iwangx on 16/9/7.
 */
import React from 'react'
import { Navigator } from 'react-native'
//引入自定义的router
import Router from "./configs/router"

import Login from './pages/user/Login'

//初始化的视图
var initialRoute = {
    //视图名字
    name: 'login-page',
    //具体的视图
    page: Login
};

var Index=React.createClass({

    configureScene:function (route) {
        if(route.sceneConfig){
            return route.sceneConfig;
        }
        return Navigator.SceneConfigs.FloatFromRight;
    },

    renderScene:function ({page, name, id, index, props}, navigator) {
        this.router = this.router || new Router(navigator);
        //将路由暴露在全局可以方便在使用了redux的控件中调用
        global.router=this.router || new Router(navigator);
        if(page){
            return React.createElement(page, {
                ref: view => this[index] = view,
                router: this.router,
                name,
                route: {
                    name,  id,  index
                }
            });
        }
    },

    render() {
        return (<Navigator
            ref={view => this.navigator=view}
            initialRoute={initialRoute}
            configureScene={this.configureScene}
            renderScene={this.renderScene}
        />);
    }
});

module.exports=Index;