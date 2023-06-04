import './styles.css';

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
        </div>
    );
}

export default ProfileSearch;
