import Link from 'next/link'

const Navigation = () =>(
    <nav className="navbar navbar-light bg-light">
        <Link href="/">
            <a className="navbar-brand">
                <img src="https://www.logolynx.com/images/logolynx/1b/1b8f07176d1ff1f7b9128b2b44bab24f.png" alt="logo" style={{width:'100px'}}/>
            </a>
        </Link>
    </nav>
)

export default Navigation