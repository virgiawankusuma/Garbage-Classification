import { NavLink } from 'react-router-dom'

export default function Navbar({ isHamburgerOpen }) {
  return (
    <nav 
      id="nav-menu" 
      className={`${!isHamburgerOpen && 'hidden'} absolute py-3 bg-white rounded-lg shadow-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none`}
    >
      <div className="block lg:flex">
        <NavLink 
          to="/" 
          className="nav-link"
          activeclassname="nav-link active"
          title="Tombol menu beranda"
          aria-label="Tombol menu beranda"
          >
            Beranda
        </NavLink>
        <NavLink 
          to="/acknowledgment" 
          className="nav-link mb-3 lg:mb-0"
          activeclassname="nav-link active"
          title="Tombol menu pengakuan"
          aria-label="Tombol menu pengakuan"
          >
            Acknowledgment
        </NavLink>
        <NavLink 
          to="/klasifikasikan" 
          className="btn-link"
          activeclassname="btn-link active"
          title="Tombol menu klasifikasikan"
          aria-label="Tombol menu klasifikasikan"
          >
            Mulai Sekarang
        </NavLink>
      </div>
    </nav>
  )
}
