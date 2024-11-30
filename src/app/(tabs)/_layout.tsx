import { Tabs } from 'expo-router'
import { colors, fontSize } from '@/constant/token';
import { BlurView } from 'expo-blur'
import { StyleSheet } from 'react-native';
import {FontAwesome, MaterialCommunityIcons, Ionicons, FontAwesome6} from '@expo/vector-icons'
const TabsNavigation = () => {
	return (
      <Tabs screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarLabelStyle: {
            fontSize: fontSize.xs,
            fontWeight: '500',
        },
        headerShown: false,
        tabBarStyle: {
            position: 'absolute',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderWidth: 0,
            paddingTop: 8,
        },
        tabBarBackground: () => 
            <BlurView intensity={95}
            style={{
                ...StyleSheet.absoluteFillObject,
                overflow: 'hidden',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
            }}
         />,
      }}>
          <Tabs.Screen 
            name="favourites" 
            options={{
                title: "Favourites",
                tabBarIcon: ({color}) => <FontAwesome name='heart' size={20} color={color} />
            }} 
          />
          <Tabs.Screen 
            name="playlists" 
            options={{
                title: "Playlists",
                tabBarIcon: ({color}) => (
                    <MaterialCommunityIcons name='playlist-play' size={20} color={color} />
                ),
            }} 
          />
          <Tabs.Screen name="(songs)" 
            options={{
                title: "Songs",
                tabBarIcon: ({color}) => (
                    <Ionicons name='musical-notes-sharp' size={20} color={color} />
                ),
            }} 
          />
          <Tabs.Screen name="artists"
            options={{
                title: "Artists",
                tabBarIcon: ({color}) => (
                    <FontAwesome6 name='users-line' size={20} color={color} />
                ),
            }} 
          />
      </Tabs> 
    )
}

export default TabsNavigation
