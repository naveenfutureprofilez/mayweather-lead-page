import Menu from "../Menu";
const MobileMenu = (props) =>{
     return <>
      <div className={`toogleMenu ${props.open ? 'open' : ''}`} >
            <ul className='menulinks  d-flex flex-wrap m-0 pe-5 ' >
                <Menu />
            </ul>
    </div></>
}
export default MobileMenu;