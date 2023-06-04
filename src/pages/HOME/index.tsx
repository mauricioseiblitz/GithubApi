import Button from 'components/Button';
import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
    return (
        <div className="home-container">
            <h1>Desafio Github API</h1>
            <h5>DevSuperior - Escola de programação</h5>
            <Link to="/profile">
                <Button />
            </Link>
        </div>
    );
}

export default Home;