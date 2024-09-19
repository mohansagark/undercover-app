import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import WebView from 'react-native-webview';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{uri: 'https://undercoverspy.netlify.app/'}}
        style={styles.webview}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default App;
