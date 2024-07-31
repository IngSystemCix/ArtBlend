import React, { useEffect } from 'react';
import '../styles/toolsbar.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const getCursorStyle = (buttonClass: string): string => {
    const cursorMap: { [key: string]: string } = {
        'bi-arrows-move': 'move',
        'bi-hand-index': 'pointer',
        'bi-square': 'crosshair',
        'bi-diamond': 'crosshair',
        'bi-circle': 'crosshair',
        'bi-arrow-up-right': 'crosshair',
        'bi-sticky': 'crosshair',
        'bi-pen': `url('./src/assets/pen.svg'), auto`,
        'bi-image': 'crosshair',
        'bi-fonts': 'text',
        'bi-eraser': `url('./src/assets/eraser.svg'), auto`
    };

    return cursorMap[buttonClass] || 'default';
};

const handleClickToolbarButton = () => {
    const buttons = document.querySelectorAll('.toolbar-button');

    buttons.forEach((button, index) => {
        if (index === 0) {
            button.addEventListener('click', () => {
                button.classList.toggle('active_lock');
            });
        } else if (index !== buttons.length - 1) {
            button.addEventListener('click', () => {
                buttons.forEach((btn, idx) => {
                    if (idx !== 0 && idx !== buttons.length - 1) {
                        btn.classList.remove('selected-toolbar-button');
                    }
                });
                button.classList.add('selected-toolbar-button');

                const buttonClass = button.classList[1];
                const cursorStyle = getCursorStyle(buttonClass);
                document.body.style.cursor = cursorStyle;
            });
        }
    });
};

const handleKeyDown = (event: KeyboardEvent) => {
    const keyMap: { [key: string]: string } = {
        'M': 'bi-arrows-move',
        'S': 'bi-hand-index',
        'C': 'bi-square',
        'R': 'bi-diamond',
        'E': 'bi-circle',
        'F': 'bi-arrow-up-right',
        'N': 'bi-sticky',
        'L': 'bi-pen',
        'I': 'bi-image',
        'T': 'bi-fonts',
        'B': 'bi-eraser'
    };

    const key = event.key.toUpperCase();
    const buttonClass = keyMap[key];

    if (buttonClass) {
        const buttons = document.querySelectorAll('.toolbar-button');
        buttons.forEach((btn, idx) => {
            if (idx !== 0 && idx !== buttons.length - 1) {
                btn.classList.remove('selected-toolbar-button');
            }
        });

        const button = document.querySelector<HTMLElement>(`.${buttonClass}`);
        if (button) {
            button.classList.add('selected-toolbar-button');
            const cursorStyle = getCursorStyle(buttonClass);
            document.body.style.cursor = cursorStyle;
        }
    }
};

export const ToolsBar: React.FC = () => {
    useEffect(() => {
        handleClickToolbarButton();
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className='toolsbar'>
            <i className='bi bi-file-earmark-lock2 toolbar-button' title='Bloquear lienzo'></i>
            <hr className='vertical-separator'/>
            <i className='bi bi-arrows-move toolbar-button selected-toolbar-button' title='Mover (M)'></i>
            <i className='bi bi-hand-index toolbar-button' title='Seleccionar (S)'></i>
            <i className='bi bi-square toolbar-button' title='Cuadrado (C)'></i>
            <i className='bi bi-diamond toolbar-button' title='Rombo (R)'></i>
            <i className='bi bi-circle toolbar-button' title='Elipse (E)'></i>
            <i className='bi bi-arrow-up-right toolbar-button' title='Flecha (F)'></i>
            <i className='bi bi-sticky toolbar-button' title='Notas (N)'></i>
            <i className='bi bi-pen toolbar-button' title='Lápiz (L)'></i>
            <i className='bi bi-image toolbar-button' title='Imagen (I)'></i>
            <i className='bi bi-fonts toolbar-button' title='Texto (T)'></i>
            <i className='bi bi-eraser toolbar-button' title='Borrar (B)'></i>
            <hr className='vertical-separator' />
            <i className='bi bi-nut toolbar-button' title='Más herramientas'></i>
            <div className='indication'>
                <p>Para moverte en el lienzo, mantén la rueda del ratón o utiliza la herramienta de desplazamiento.</p>
            </div>
        </div>
    );
};
