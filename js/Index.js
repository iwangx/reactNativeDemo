/**
 * Created by iwangx on 16/9/7.
 */
import React from 'react'
import { Navigator } from 'react-native'
import Router from "./configs/router"

import Login from './pages/user/Login'

var initialRoute = {
    name: 'login-page',
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