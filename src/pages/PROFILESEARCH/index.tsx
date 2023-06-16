import { ReactComponent as MainImage } from 'assets/images/image.svg';

import './styles.css';
import ResultCard from 'components/ResultCard';

const ProfileSearch = () => {
    return (
        <div className="profile-search-container">
            <div className="container search-container">
                <h1>Encontre um perfil Github</h1>
                <form>
                    <div className="form-container">
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Usuário Github"
                            onChange={() => { }}
                        />
                        <button type="submit" className="btn btn-primary search-button">
                            Encontrar
                        </button>
                    </div>
                </form>
            </div>
            <div className="container profile-container">
                <div className="imagem-container">
                    <MainImage />
                </div>
                <div className="informacoes-container">
                    <h1>Informações</h1>
                    <ResultCard title='Perfil: ' description='Perfil: https://api.github.com/users/acenelio' />
                    <ResultCard title='Seguidores: ' description='4379' />
                    <ResultCard title='Localidade: ' description='Uberlândia' />
                    <ResultCard title='Nome: ' description='Nelio Alves' />
                </div>
            </div>
        </div>
    );
}

export default ProfileSearch;
