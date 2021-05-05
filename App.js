import React from "react";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {Register, HomePage, SettingsPage, ProfilePage} from "./Screens/HomePage";

import {OptionsPage2Topics, OptionsPage2General, OptionsPage1} from "./Screens/OptionsPages";
import {GeneralEasy, GeneralMedium, GeneralHard} from "./Screens/GeneralPages";
import { TopicsBiology, TopicsHistory, TopicsLanguage, TopicsMath } from "./Screens/TopicsPages";

const AuthStack = createStackNavigator(); 

export default () => (
    <NavigationContainer>
        <AuthStack.Navigator >
            <AuthStack.Screen name = "Register" component= {Register} />
            <AuthStack.Screen name = "HomePage" component= {HomePage}/>
            <AuthStack.Screen name = "OptionsPage1" component= {OptionsPage1}/>
             <AuthStack.Screen name = "OptionsPage2Topics" component= {OptionsPage2Topics}/>
             <AuthStack.Screen name = "OptionsPage2General" component= {OptionsPage2General}/>
             <AuthStack.Screen name = "SettingsPage" component= {SettingsPage}/>
             <AuthStack.Screen name = "GeneralEasy" component= {GeneralEasy}/>
             <AuthStack.Screen name = "GeneralMedium" component= {GeneralMedium}/>
             <AuthStack.Screen name = "GeneralHard" component= {GeneralHard}/>
             <AuthStack.Screen name = "TopicsMath" component= {TopicsMath}/>
             <AuthStack.Screen name = "TopicsHistory" component= {TopicsHistory}/>
             <AuthStack.Screen name = "TopicsBiology" component= {TopicsBiology}/>
             <AuthStack.Screen name = "TopicsLanguage" component= {TopicsLanguage}/>
             <AuthStack.Screen name = "ProfilePage" component= {ProfilePage}/>
        </AuthStack.Navigator>
    </NavigationContainer>
);
