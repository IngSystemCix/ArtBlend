import React, { useEffect } from 'react';
import '../styles/hamburgerMenu.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const ButtonMenu: React.FC<{ description: string, icon: string }> = ({ description, icon }) => {
    return (
        <button type="button" className='buttonMenu'>
            <i className={icon}></i>{description}
        </button>
    );
}

const TypeGrid: React.FC<{ style: string }> = ({ style }) => {
    return (
        <button className={style} type="button"></button>
    );
}

const ColorBackground: React.FC<{ background: string, id?: string }> = ({ background, id }) => {
    return (
        <button
            className='defaultButton'
            type="button"
            style={{ backgroundColor: `${background}` }}
            id={id}
        ></button>
    );
}

export const HamburgerMenu: React.FC = () => {
    useEffect(() => {
        const hamburgerMenu = document.querySelector('.hamburgerMenu');
        const menu = document.querySelector('.menu');
        const colorsBackgroundSection = document.querySelector('.section_colors_background');

        const handleHamburgerMenuClick = (event: Event) => {
            menu?.classList.toggle('hidden');
            event.stopPropagation();
        };

        const handleDocumentClick = (event: Event) => {
            const target = event.target as HTMLElement;
            if (!hamburgerMenu?.contains(target) && !menu?.contains(target)) {
                menu?.classList.add('hidden');
            }
        };

        const handleColorsBackgroundClick = (event: Event) => {
            event.stopPropagation();
        };

        hamburgerMenu?.addEventListener('click', handleHamburgerMenuClick);
        document.addEventListener('click', handleDocumentClick);
        colorsBackgroundSection?.addEventListener('click', handleColorsBackgroundClick);

        return () => {
            hamburgerMenu?.removeEventListener('click', handleHamburgerMenuClick);
            document.removeEventListener('click', handleDocumentClick);
            colorsBackgroundSection?.removeEventListener('click', handleColorsBackgroundClick);
        };
    }, []);

    return (
        <div className='hamburgerMenu'>
            <i className='bi bi-list'></i>
            <div className='menu hidden'>
                <ButtonMenu description='Mi cuenta' icon='bi bi-person-circle' />
                <hr style={{ width: '90%', transform: 'translateX(5%)', borderRadius: '100%' }} />
                <ButtonMenu description='Exportar imagen...' icon='bi bi-box-arrow-up-right' />
                <ButtonMenu description='Limpiar lienzo' icon='bi bi-trash' />
                <hr style={{ width: '90%', transform: 'translateX(5%)', borderRadius: '100%' }} />
                <ButtonMenu description='GitHub' icon='bi bi-github' />
                <ButtonMenu description='Google' icon='bi bi-google' />
                <ButtonMenu description='Microsoft' icon='bi bi-windows' />
                <hr style={{ width: '90%', transform: 'translateX(5%)', borderRadius: '100%' }} />
                <div className='section_type_grid'>
                    <span>Tipos de grilla</span>
                    <div className='list_type_grid'>
                        <TypeGrid style='grid' />
                        <TypeGrid style='dot' />
                        <TypeGrid style='horizontalLine' />
                        <TypeGrid style='noneGrid' />
                    </div>
                </div>
                <hr style={{ width: '90%', transform: 'translateX(5%)', borderRadius: '100%' }} />
                <div className='section_colors_background'>
                    <span>Colores de fondos</span>
                    <div className='list_colors_background'>
                        <ColorBackground background='#FFF' />
                        <ColorBackground background='#13171b' />
                        <ColorBackground background='#D4BDAC' />
                        <ColorBackground background='#FFF' id='pickerButton' /> {/* componente del picker */}
                    </div>
                </div>
                <hr style={{ width: '90%', transform: 'translateX(5%)', borderRadius: '100%' }} />
                <ButtonMenu description='Cerrar sesión' icon='bi bi-box-arrow-left' />
            </div>
        </div>
    );
}
