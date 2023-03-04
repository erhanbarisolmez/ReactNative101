import React from 'react';
import Stillendirme from './src/stillendirme';
import Flex from './src/Flex';
import TextInputExample from './src/components/TextInput';
import FlatListExample from './src/components/FlatList';
import ButtonExample from './src/components/Button';
import ObjectState from './src/components/ObjectState';
import ArrayState from './src/components/ArrayState';
import Counter from './src/components/Counter';
import Navigation from './src/Navigation';
import TabNavigation from './src/components/TabNavigation';
import Form from './src/components/form/Form';
import FormWithFormik from './src/components/form/FormWithFormik';
import NativeBaseApp from './src/components/native-base-io/NativeBaseApp';
import StackNavigator from './src/components/contex-api/navigation/StackNavigator';
import StackOrnek1 from './src/components/contex-api/context-ornek1/navigation/StackOrnek1';
import CounterState from './src/components/zustand-state-manager/components/CounterState';
import {CounterContextProvider} from './src/components/zustand-state-manager/context/CounterContext';
import CounterWithZustand from './src/components/zustand-state-manager/components/CounterWithZustand';
import StackOrnek2 from './src/components/zustand-state-manager/zustand-ornek1/navigation/StackOrnek2';

function App() {
  return (
    // ctrl+K+C - ctrl+K+U
    // <Stillendirme /> // Stillendirme işlemlerinin nasıl yapılacağı anlatılmaktadır.
    // <Flex title='Box 1'/> // Flex ile konumlandırma işlemlerinin nasıl yapılacağı anlatılmaktadır.
    // <TextInputExample /> // Input işlemleri örnekleri.
    // <FlatListExample/>  // FlatList kullanımı.
    // <ButtonExample />   // useState kullanımı.
    // <ObjectState /> // Object state kullanımı. {}
    // <ArrayState />    // Array state kullanımı. []
    // <Counter /> // useEffect örnek.
    // <Navigation /> Stack Navigator.
    // <TabNavigation/> // Drawer, Stack, Bottom tabs navigator ve axios fetch işlemleri.
    // <Form />  // Form manuel kullanım.
    // <FormWithFormik /> // Form formik ve yup  validations kullanımı.
    // <StackNavigator /> // Context ve Multi Context kullanımı.
    // <StackOrnek1 /> // Context ile API kullanımı ekleme-silme-listeleme

    // <CounterContextProvider>   <CounterState />    </CounterContextProvider>  //context count
    // <CounterWithZustand /> //zustand count
    <StackOrnek2 /> // zustand kullanarak ekleme-silme-listeleme
  );
}

export default App;
