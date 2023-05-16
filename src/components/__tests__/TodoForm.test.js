import { render, screen } from '@testing-library/react';
import TodoForm from '../TodoForm';

test('should render TodoForm component', () => {
    render(<TodoForm/>);
    const todoFormElement = screen.getByTestId('todo-form');
    expect(todoFormElement).toBeInTheDocument();
});