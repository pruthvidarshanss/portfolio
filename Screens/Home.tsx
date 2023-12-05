import React from "react";
import { Text, Image, View, SafeAreaView, TouchableOpacity } from "react-native";
import { Card, Styles } from "./Styles";
import { StatusBar } from "expo-status-bar";


export default class Home extends React.Component {
    render() {
        return (
            <SafeAreaView style={Styles.container}>
                <Image
                    style={[Styles.imageDP]}
                    source={require("../assets/adaptive-icon.png")}
                />

                <View
                    style={{ flex: 1 }}
                >
                    <TouchableOpacity>
                        <View
                            style={Card.body}
                        >
                            <Text
                                style={[Styles.headTopic, { fontStyle: "italic" }]}
                            >
                                HII THERE! I'AM</Text>

                            <Text
                                style={[Styles.headTopic, Styles.headName, { marginTop: 10, marginBottom: 10 }]}
                            >
                                PRUTHVI DARSHAN S S</Text>

                            <Text
                                style={[Styles.headTopic, { fontStyle: "italic" }]}
                            >
                                AIOps & MLOps ENGINEER</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View
                            style={Card.body}
                        >
                            <Text
                                style={Styles.headName}
                            >
                                PORTFOLIO
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View
                    style={{ flex: 1 }}
                >
                    <TouchableOpacity>
                        <View
                            style={Card.body}
                        >
                            <Text
                                style={Styles.headName}
                            >
                                RESUME
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View
                            style={Card.body}
                        >
                            <Text
                                style={Styles.headName}
                            >
                                ABOUT ME
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <StatusBar style="auto" />
            </SafeAreaView>
        );
    };
}
