import Link from 'next/link'

function Navigation() {
    return(
        <nav className="navbar navbar-light bg-light">
            <Link href="/">
                <a className="navbar-brand">
                    <img src="https://img2.pngio.com/rick-and-morty-logo-art-of-rick-and-morty-by-justin-roiland-png-justin-roiland-png-840_859.png" alt="logo"/>
                </a>
            </Link>
        </nav>
    )
}
  
export default Navigation