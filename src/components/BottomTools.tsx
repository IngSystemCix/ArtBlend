import '../styles/bottomTools.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

export const BottomTools : React.FC = () => {
    return (
        <div className='container_bottom'>
            <div className='zoom'>
                <button type="button" className='right'><i className='bi bi-dash'></i></button>
                <span>100%</span>
                <button type="button" className='left'><i className='bi bi-plus-lg'></i></button>
            </div>
            <div className='undo-redo'>
                <button type="button" className='right'><i className='bi bi-arrow-counterclockwise'></i></button>
                <button type="button" className='left'><i className='bi bi-arrow-clockwise'></i></button>
            </div>
        </div>
    );
}