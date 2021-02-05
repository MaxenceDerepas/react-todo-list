import logo from "./assets/images/logo.png";

const Header = () => {
    return (
        <header>
            <img src={logo} alt="logo-list" />
            <p>Todo List</p>
        </header>
    );
};

export default Header;
