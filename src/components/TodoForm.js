import React, {useState, useEffect, useRef } from 'react';

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    //laitetaan inputkenttä focukseen
    const inputRef = useRef(null)
    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');
    };

    return (
    <div data-testid='todo-form'>
        <form className = 'todo-form' onSubmit={handleSubmit}>
            {props.edit ? (
            <>
            <input 
                type='text'
                placeholder='Päivitä todo'
                value={input}
                name='text'
                className='todo-input edit'
                onChange={handleChange}
                ref={inputRef}
                />
            <button className='todo-button edit'>Päivitä</button>
            </>) :
            ( 
            <>
            <input 
                type='text'
                placeholder='Lisää todo'
                value={input}
                name='text'
                className='todo-input'
                onChange={handleChange}
                ref={inputRef}
                />
            <button className='todo-button'>Lisää</button>
            </>)}         
        </form>
    </div>
    )
}

export default TodoForm