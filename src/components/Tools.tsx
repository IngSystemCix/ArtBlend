import React, { useState, useEffect } from 'react';
import '../styles/tools.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

// const explorerT

export const Tools : React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    
    useEffect(() => {
        document.title = `ArtBlend | ${inputValue || 'Nuevo lienzo'}`; // Título por defecto si el campo está vacío
    }, [inputValue]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };
    return (
        <div className='container'>
            <input type="text" placeholder='Nombre del lienzo' value={inputValue} onChange={handleChange}/>
            <button type="button">
                <i className='bi bi-book-half'></i>
                Biblioteca
            </button>
        </div>
    );
}