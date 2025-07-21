import Image from 'next/image'
import { MenuItem } from 'interfaces'

interface MenuOptions {
    mainMenu: MenuItem[]
}

export default function FooterSection({ mainMenu }: MenuOptions) {
    const links = mainMenu.map((link) => ({
        ...link,
        url: link.url[0] === "#" ? `/${link.url}` : link.url
    })
    )

    return (<footer className="footer pt-120">
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                    <div className="footer-widget">
                        <div className="logo">
                            <a href="/">
                                <Image width={180} height={50} src="/logo.png" alt="logo" />
                            </a>
                        </div>
                        <p className="desc">Nuestras Redes.</p>
                        <ul className="social-links">
                            <li><a href="https://www.facebook.com/zascontac/" target='_blank'><i className="lni lni-facebook"></i></a></li>
                            {/* <li><a href="#0"><i className="lni lni-linkedin"></i></a></li> */}
                            <li><a href="https://www.instagram.com/zasconta/" target='_blank'><i className="lni lni-instagram"></i></a></li>
                            {/* <li><a href="#0"><i className="lni lni-twitter"></i></a></li> */}
                            <li><a href="https://api.whatsapp.com/message/ZMXKC4BK3Z7NL1?autoload=1&app_absent=0" target='_blank'><i className="lni lni-whatsapp"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-xl-5 col-lg-4 col-md-12 col-sm-12 offset-xl-1">
                    <div className="footer-widget">
                        <h3>Sobre Nosotros</h3>
                        <ul className="links">
                            {links.map((navLink) => (
                                <li key={navLink.url}>
                                    <a href={navLink.url}>{navLink.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="footer-widget">
                        <h3>Subscribe Newsletter</h3>
                        <form action="#">
                            <input type="email" placeholder="Email" />
                            <button className="main-btn btn-hover">Subscribe</button>
                        </form>
                    </div>
                </div> */}
            </div>
        </div>
    </footer>
    )
}