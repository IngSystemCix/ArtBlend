import React, { useState } from 'react';
import { PopUpMenu } from "./PopUpMenu";

export const Layer: React.FC = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
    const [isActive, setIsActive] = useState(false);

    const handleContextMenu = (event: React.MouseEvent) => {
        event.preventDefault(); // Previene el menú contextual por defecto
        setMenuPosition({ x: event.clientX, y: event.clientY });
        setMenuVisible(true);
    };

    const handleClick = () => {
        setMenuVisible(false);
    };

    const handleSwitchButtonClick = (): void => {
        setIsActive(prevState => !prevState);
    };

    return (
        <div className='layer' onContextMenu={handleContextMenu} onClick={handleClick}>
            {menuVisible && 
                <PopUpMenu 
                    x={menuPosition.x} 
                    y={menuPosition.y} 
                    isActive={isActive} 
                    onSwitchButtonClick={handleSwitchButtonClick} 
                />
            }
        </div>
    );
}
