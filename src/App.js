import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import { theme } from './theme';
import Input from './component/Input';
import Task from './component/Task';
import { useWindowDimensions } from 'react-native';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  align-items: center;
  justify-content: flext-start;
`;

const Title = styled.Text`
  font-size: 40px;
  font-weight: 600;
  color: ${({ theme }) => theme.main};
  align-self: flex-start;
  margin: 20px;
`;

const List = styled.ScrollView`
  flex: 1;
  width: ${({ width }) => width - 40}px;
`;

export default function App() {
  const width = useWindowDimensions().width;

  const [newTask, setNewTask] = useState('');

  const _addTask = () => {
    alert(`Add: ${newTask}`);
    setNewTask('');
  };

  const _handleTextChange = (text) => {
    setNewTask(text);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar
          barStyle="light-content"
          backgroundColor={theme.background}
        />
        <Title>TODO List</Title>
        <Input
          placeholder="+ Add a Task"
          value={newTask}
          onChangeText={_handleTextChange}
          onSubmitEditing={_addTask}
        />
        <List width={width}>
          <Task text="Hanbit" />
          <Task text="React Native" />
          <Task text="React Native Sample" />
          <Task text="Edit Todo Items" />
        </List>
      </Container>
    </ThemeProvider>
  );
}
