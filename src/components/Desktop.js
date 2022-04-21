import TopBar from './Bars/TopBar/TopBar';
import SideBar from './Bars/SideBar/SideBar';
import Console from './Console/Console';
import './Desktop.css';

function Desktop({isLoading}){
    return(
        <div className={`Desktop ${isLoading ? '' : 'visible'}`}>
            <TopBar />
            <SideBar />
            <Console />
        </div>
    );
}

export default Desktop;