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

const App = () => {
  return (
    <View style={{backgroundColor: '#242938', flex: 1}}>
      <LineChart
        data={{
          labels: [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
          ],
          datasets: [
            {
              data: [
                Math.random() * 0.01,
                Math.random() * 0.01,
                Math.random() * 0.01,
                Math.random() * 0.01,
                Math.random() * 0.01,
                Math.random() * 0.01,
                Math.random() * 0.01,
                Math.random() * 0.01,
                Math.random() * 0.01,
                Math.random() * 0.01,
                Math.random() * 0.01,
                Math.random() * 0.01,
                Math.random() * 0.01,
                Math.random() * 0.01,
                Math.random() * 0.01,
                Math.random() * 0.01,
                Math.random() * 0.01,
                Math.random() * 0.01,
                Math.random() * 0.01,
                Math.random() * 0.01,
                Math.random() * 0.01,
                Math.random() * 0.01,
                Math.random() * 0.01,
                Math.random() * 0.01,
              ],
            },
          ],
        }}
        onDataPointClick={index => {
          console.log(index.index);
        }}
        withVerticalLabels={false}
        withVerticalLines={false}
        width={Dimensions.get('window').width} // from react-native
        height={220}
        yAxisLabel="$"
        chartConfig={{
          backgroundGradientFrom: '#242938',
          backgroundGradientTo: '#242938',
          // fillShadowGradient: 'rgba(255, 151, 47, 1)',
          // fillShadowGradientOpacity: 0.5,

          // backgroundColor: '#e26a00',
          decimalPlaces:4, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 151, 47, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(207, 210, 221, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '1',
            strokeWidth: '1',
            stroke: '#ffa726',
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
