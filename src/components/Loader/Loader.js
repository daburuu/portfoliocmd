import './Loader.css';

function Loader({isLoading}){

    return(
        <div className={`preloader ${isLoading ? '' : 'hidden' }`}>
            <div className="card">
                <div className="booting">Starting up</div>
            </div>
        </div>
    );
}

export default Loader;