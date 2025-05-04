import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import styles from './style';

const App = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState<string | null>(null);
  const [firstValue, setFirstValue] = useState('');

  const handleNumberInput = (num: string) => {
    if (displayValue === '0') {
      setDisplayValue(num.toString());
    } else {
      setDisplayValue(displayValue + num);
    }
  };

  const handleOperatorInput = (op: string) => {
    setOperator(op);
    setFirstValue(displayValue);
    setDisplayValue('0');
  };

  const handleEqual = () => {
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(displayValue);
    let result = 0;

    if (operator === '+') result = num1 + num2;
    else if (operator === '-') result = num1 - num2;
    else if (operator === '*') result = num1 * num2;
    else if (operator === '/') result = num1 / num2;

    setDisplayValue(result.toString());
    setOperator(null);
    setFirstValue('');
  };

  const handleClear = () => {
    setDisplayValue('0');
    setOperator(null);
    setFirstValue('');
  };

  const renderButton = (
    label:
      | string
      | number
      | bigint
      | boolean
      | React.ReactElement<unknown, string | React.JSXElementConstructor<any>>
      | Iterable<React.ReactNode>
      | Promise<
          | string
          | number
          | bigint
          | boolean
          | React.ReactPortal
          | React.ReactElement<
              unknown,
              string | React.JSXElementConstructor<any>
            >
          | Iterable<React.ReactNode>
          | null
          | undefined
        >
      | null
      | undefined,
    onPress: ((event: GestureResponderEvent) => void) | undefined,
    extraStyle = {},
  ) => (
    <TouchableOpacity style={[styles.button, extraStyle]} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.display}>{displayValue}</Text>

      <View style={styles.row}>
        {renderButton('7', () => handleNumberInput('7'))}
        {renderButton('8', () => handleNumberInput('8'))}
        {renderButton('9', () => handleNumberInput('9'))}
        {renderButton('÷', () => handleOperatorInput('/'), styles.operator)}
      </View>

      <View style={styles.row}>
        {renderButton('4', () => handleNumberInput('4'))}
        {renderButton('5', () => handleNumberInput('5'))}
        {renderButton('6', () => handleNumberInput('6'))}
        {renderButton('×', () => handleOperatorInput('*'), styles.operator)}
      </View>

      <View style={styles.row}>
        {renderButton('1', () => handleNumberInput('1'))}
        {renderButton('2', () => handleNumberInput('2'))}
        {renderButton('3', () => handleNumberInput('3'))}
        {renderButton('-', () => handleOperatorInput('-'), styles.operator)}
      </View>

      <View style={styles.row}>
        {renderButton('0', () => handleNumberInput('0'))}
        {renderButton('+', () => handleOperatorInput('+'), styles.operator)}
        {renderButton('=', handleEqual, styles.equal)}
      </View>

      <View style={styles.row}>
        {renderButton('C', handleClear, {width: 260})}
      </View>
    </View>
  );
};

export default App;
