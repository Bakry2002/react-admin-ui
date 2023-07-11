import './navbar.scss'

const  Navbar = () => {
    return (
        <div className='navbar'>
            <div className="logo">
                <img src="logo.svg" alt="logo" />
                <span>Admin Me</span>
            </div>
            <div className="icons">
                <img src="/search.svg" alt="search icon" className='icon'/>
                <img src="/app.svg" alt="app icon" className='icon'/>
                <img src="/expand.svg" alt="expand icon" className='icon'/>
                <div className="notification">
                    <img src="/notifications.svg" alt="notification icon" />
                    <span>1</span>
                </div>
                <div className="user">
                    <img src="/me-image-2.webp" alt="user image" />
                    <span>Abdullah</span>
                </div>
                <img src="/setting.svg" alt="setting icon" className='icon'/>
            </div>
        </div>
    );
}

export default Navbar;