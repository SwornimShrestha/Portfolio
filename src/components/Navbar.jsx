import { useState } from "react";
import logo from "../assets/image.png";
import { NAVIGATION_LINKS } from "../constants";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toogleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (e, herf) => {
    e.preventDefault();
    const targetElement = document.querySelector(herf);
    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };
  return (
    <div>
      <nav className="fixed left-0 right-0 top-4 z-50">
        {/* {Destop} */}
        <div className="mx-auto hidden max-w-2xl items-center justify-center rounded-lg border border-stone-50/30 bg-black/20 py-3 backdrop-blur-lg lg:flex">
          <div className="flex items-center justify-between gap-6">
            <div>
              <ul className="flex items-center gap-4">
                {NAVIGATION_LINKS.map((item, index) => (
                  <li key={index}>
                    <a
                      className="text-sm hover:text-yellow-400"
                      href={item.href}
                      onClick={(e) => handleLinkClick(e, item.href)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* {MobileMenu} */}
        <div className="rounded-lg backdrop-blur-md lg:hidden">
          <div className="flex items-center justify-between">
            <div>
              <a href="#">
                <img src={logo} alt="logo" width={90} className="m-2" />
              </a>
            </div>
            <div className="flex items-cemter">
              {" "}
              <button
                className="focus:outline-none lg:hidden"
                onClick={toogleMobileMenu}
              >
                {isMobileMenuOpen ? (
                  <FaTimes className="m-2 h-6 w-5" />
                ) : (
                  <FaBars className="m-2 h-6 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
        {isMobileMenuOpen && (
          <ul className="ml-4 m-4 flex flex-col backdrop-blur-md">
            {NAVIGATION_LINKS.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="block w-full text-lg"
                  onClick={(e) => handleLinkClick(item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
