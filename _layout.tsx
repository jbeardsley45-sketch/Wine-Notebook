import {Stack} from 'expo-router';
export default function Layout(){return <Stack screenOptions={{headerTitle:'Wine Tasting Notebook'}}>
 <Stack.Screen name="index" options={{headerShown:false}}/><Stack.Screen name="login" options={{title:'Sign in'}}/><Stack.Screen name="library" options={{title:'My Tastings'}}/><Stack.Screen name="tasting" options={{title:'Tasting'}}/><Stack.Screen name="compare" options={{title:'Compare Wines'}}/><Stack.Screen name="map" options={{title:'Wine Region Map'}}/>
</Stack>}
