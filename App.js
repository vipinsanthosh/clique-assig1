import React, { useState } from 'react';
import { Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import ApNavigator from './Navigation/ApNavigator';



const fetchFonts = () => {
  return Font.loadAsync({
    'open-find': require('./assets/fonts/Liebe finden - TTF.ttf'),
    'open-thin': require('./assets/fonts/Famosa-LightDemo.otf'),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }
  global.pho123 = '';
  return <ApNavigator />;
}
