import { SafeAreaView } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import {
  HelloWorldScreen, CounterScreen, CounterM3Screen, BoxObjectModelScreen,
  DimensionScreen, PositionScreen, PositionAbsoluteScreen, FlexScreen,
  FlexDirectionScreen, FlexDirectionAlignItemsScreen, FlexDirectionAlignSelf,
  FlexDirectionFlexWrap, HomeworkScreen
} from './src/presentation/screens'
import IonIcon from 'react-native-vector-icons/Ionicons'



export const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: (props) => <IonIcon {...props} />
      }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        {/* <HelloWorldScreen nombre='Claudio Sepulveda' /> */}
        {/* <CounterScreen /> */}
        {/* <CounterM3Screen /> */}
        {/* <BoxObjectModelScreen /> */}
        {/* <DimensionScreen /> */}
        {/* <PositionScreen /> */}
        {/* <PositionAbsoluteScreen /> */}
        {/* <FlexScreen /> */}
        {/* <FlexDirectionScreen /> */}
        {/* <FlexDirectionAlignItemsScreen /> */}
        {/* <FlexDirectionAlignSelf /> */}
        {/* <FlexDirectionFlexWrap /> */}
        <HomeworkScreen />
      </SafeAreaView>
    </PaperProvider>
  );
}