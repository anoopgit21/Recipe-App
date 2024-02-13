import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BellAlertIcon, BellIcon, HeartIcon, HomeIcon } from 'react-native-heroicons/outline';
import { PlusIcon } from 'react-native-heroicons/outline';

const BottomTab = () => {
  return (
    <View style={styles.container}>
      <HomeIcon size={35} color="#FFBF00" style={styles.icon} />
      <PlusIcon size={35} color="#FFBF00" style={styles.icon} />
      <HeartIcon size={35} color="#FFBF00" style={styles.icon} />
      <BellIcon size={35} color="#FFBF00" style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000',
    borderRadius: 30,
    marginBottom: 3,
    margin: 3,
    padding: 7,
    elevation: 5, // Add elevation for shadow (Android)
    shadowColor: '#FFBF00', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.5, // Shadow opacity
    shadowRadius: 5, // Shadow radius
  },
  icon: {
    marginHorizontal: 7, // Add any additional styles for the icons if needed
  },
});

export default BottomTab;
