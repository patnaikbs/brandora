import React from 'react';
import { Button, Text, View } from 'react-native';

export default function Home({navigation}) {
    return (
        <View>
            <Text>Home Screen</Text>
            <Button title="Home" onPress={()=>navigation.navigate("Home")}/>

            <Text>Profile Screen</Text>
            <Button title="Profile" onPress={()=>navigation.navigate("Profile")}/>

            <Text>Settings Screen</Text>
            <Button title="Settings" onPress={()=>navigation.navigate("Settings")}/>
            
            <Text>Settings Screen</Text>
            <Button title="Notification" onPress={()=>navigation.navigate("Notification")}/>

        </View>
        


    );
}


