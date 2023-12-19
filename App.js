import React, { useState, createContext, useContext, useEffect} from "react";
import { View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { onAuthStateChanged } from "firebase/auth";

import Chat from "./Screens/Chat";
import Login from "./Screens/Login";
import Signup from "./Screens/Signup";
import Home from "./Screens/Home"
import { auth } from "./config/firebase";

const stack = createStackNavigator();
const authenticatedUserContext = createContext();
 
const AuthenticatedUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <authenticatedUserContext.Provider value={{user, setUser}}>
       {children}
    </authenticatedUserContext.Provider>
  )
}

function ChatStack () {
  return (
    <stack.Navigator defaultScreenOptions={Home}>
      <stack.Screen name="Home" component={Home} />
      <stack.Screen name="Chat" component={Chat} />
    </stack.Navigator>
  )
}

function AuthStack () {
  return (
    <stack.Navigator defaultScreenOptions={Login} screenOptions={{ headerShown: false}}>
      <stack.Screen name="Login" component={Login} />
      <stack.Screen name="Signup" component={Signup} />
    </stack.Navigator>
  )
}

function RootNavigator () {
  const { user, setUser } = useContext(authenticatedUserContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,
      async authenticatedUser => {
        authenticatedUser ? setUser(authenticatedUser) : setUser(null);
        setLoading(false);
      }
      );
      return () => unsubscribe();
  }, [user ]);
  if(loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    )
  }
  return (
    <NavigationContainer>
      { user ? <ChatStack /> : <AuthStack /> }
    </NavigationContainer>
  )
}

export default function App() {
  return(
    <AuthenticatedUserProvider>
        <RootNavigator/>
    </AuthenticatedUserProvider>
  )
}


