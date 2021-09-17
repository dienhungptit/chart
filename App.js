import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

import {Dimensions} from 'react-native';
const screenWidth = Dimensions.get('window').width;

const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientFromOpacity: 0,
  fillShadowGradient: 'rgba(255, 151, 47,1)',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(207, 210, 221, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      color: (opacity = 1) => `rgba(1255, 151, 47, ${opacity})`, // optional
      strokeWidth: 2, // optional
    },
  ],
  legend: ['Rainy Days'], // optional
};

const App = () => {
  return (
    <View style={{backgroundColor: '#242938', flex: 1}}>
      <LineChart
        data={data}
        width={screenWidth}
        height={256}
        verticalLabelRotation={30}
        chartConfig={chartConfig}
        bezier
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
