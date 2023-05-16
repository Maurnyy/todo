import { render, screen } from '@testing-library/react';
import TodoList from '../TodoList';

test('should render TodoList component', () => {
    render(<TodoList/>);
    const todoListElement = screen.getByTestId('todo-list');
    expect(todoListElement).toBeInTheDocument();
});