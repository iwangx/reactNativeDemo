'use strict';
import React from "react"
import {Navigator} from 'react-native';


// Pages

import Login from '../pages/user/Login'
import Register from "../pages/user/Register"


// Config
const sceneConfig = require('./sceneConfig')
const customFloatFromRight = sceneConfig.customFloatFromRight;
const customFloatFromBottom =sceneConfig.customFloatFromBottom;


class Router {
    constructor(navigator) {
        this.navigator = navigator
    }

    push(props, route) {
        let routesList = this.navigator.getCurrentRoutes()
        let nextIndex = routesList[routesList.length - 1].index + 1
        route.props = props
        route.index = nextIndex
        this.navigator.push(route)
    }

    pop() {
        this.navigator.pop()
    }

    toLogin(props){
        this.push(props, {
            page: Login,
            name: 'Login',
            sceneConfig: customFloatFromRight
        })
    }

    toRegister(props){
        this.push(props,{
            page:Register,
            name:"Register",
            sceneConfig: customFloatFromBottom
        })
    }

    replaceWithHome() {
        this.navigator.popToTop()
    }
}

module.exports = Router;

