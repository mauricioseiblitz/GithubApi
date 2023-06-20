import { ReactComponent as MainImage } from 'assets/images/image.svg';
import ResultCard from 'components/ResultCard';
import { useState } from 'react';
import axios from 'axios';

import './styles.css';

type FormData = {
    login: string;
}

type Profile = {
    url: string;
    followers: string;
    location: string;
    name: string;
}

const ProfileSearch = () => {

    const [profile, setProfile] = useState<Profile>();

    const [formData, setFormData] = useState<FormData>({
        login: '',
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData({ ...formData, [name]: value });
    };

    const hanbleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        axios
            .get(`https://api.github.com/users/${formData.login}`)
            .then((response) => {
                setProfile(response.data);
            })
            .catch((error) => {
                setProfile(undefined);
                console.log(error);
            });
    }

    return (
        <div className="profile-search-container">
            <div className="container search-container">
                <h1>Encontre um perfil Github</h1>
                <form onSubmit={hanbleSubmit}>
                    <div className="form-container">
                        <input
                            type="text"
                            name="login"
                            className="search-input"
                            placeholder="Usuário Github"
                            value={formData.login}
                            onChange={handleChange}
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
                    {profile &&
                        <>
                            <ResultCard title='Perfil: ' description={profile.url} />
                            <ResultCard title='Seguidores: ' description={profile.followers} />
                            <ResultCard title='Localidade: ' description={profile.location} />
                            <ResultCard title='Nome: ' description={profile.name} />
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default ProfileSearch;
