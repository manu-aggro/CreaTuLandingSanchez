import CardWidget from "./CarWidget/CarWidget"

const NavBar = () => {
    return (
        <nav className="NavBar">
            <img className="LogoIco" src="../public/logo.ico" alt="" />
            <h2>
                Melopea beer shop
            </h2>

            <div className="buttons">

            <CardWidget />
            <button>Cervezas</button>
            <button>Merchan</button>
            <button>Cata</button>
            

            </div>
        
            
        </nav>
    )
}

export default NavBar