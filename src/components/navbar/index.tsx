import { h, FunctionalComponent } from 'preact';
import { Link } from 'preact-router/match';


const NavBar: FunctionalComponent<{}> = () => (
    <nav class="navbar navbar-expand-sm navbar-dark info-color  navbar-dark bg-dark">
        <a class="navbar-brand" href="#">z2m lite admin</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <Link className="nav-link waves-effect waves-light" activeClassName="active" href="/">Home</Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link waves-effect waves-light" activeClassName="active" href="/map">Map</Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link waves-effect waves-light" activeClassName="active" href="/settings">Settings</Link>
                </li>
            </ul>
        </div>
    </nav>
);

export default NavBar;