import '../styles/popUpMenu.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

interface MenuItemProps {
    description: string;
    icon: string;
    active?: boolean;
    onClick?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ description, icon, active = false, onClick }) => {
    return (
        <button className={`menuItem ${active ? 'active' : ''}`} type="button" onClick={onClick}>
            <i className={icon}></i> {description}
        </button>
    );
}

interface PopUpMenuProps {
    x: number;
    y: number;
    isActive: boolean;
    onSwitchButtonClick: () => void;
}

export const PopUpMenu: React.FC<PopUpMenuProps> = ({ x, y, isActive, onSwitchButtonClick }) => {
    return (
        <div className="pop-up-container" style={{ transform: `translate(${x}px, ${y}px)` }}>
            <MenuItem
                description="Activar grilla"
                icon="bi bi-grid-3x3-gap"
                active={isActive}
                onClick={onSwitchButtonClick}
            />
            <MenuItem description="Copiar" icon="bi bi-clipboard" />
            <MenuItem description="Pegar" icon="bi bi-clipboard-check" />
            <MenuItem description="Eliminar" icon="bi bi-trash" />
        </div>
    );
}
