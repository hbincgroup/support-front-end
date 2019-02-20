import React from "react";
import {Button, View} from "react-native";
import PropTypes from "prop-types";

export default class DrawerButton extends React.Component {
    static propTypes = {
        nav: PropTypes.object,
    };

    render() {
        return (
            <View>
            <Button title={'|||'} onPress={() => this.props.nav.toggleDrawer()}/>
        </View>
    );
    }
}
