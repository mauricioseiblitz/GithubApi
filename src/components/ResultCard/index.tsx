import './styles.css';

type Props = {
    title: string;
    description: string;
}

const ResultCard = ({ title, description }: Props) => {

    return (
        <div className="result-container">
            {
                title.includes('Perfil') ? (
                    <>
                        <p className="result-title">{title}</p>
                        <p className="result-description"><span>{description}</span></p>
                    </>
                ) :
                    <>
                        <p className="result-title">{title}</p>
                        <p className="result-description">{description}</p>
                    </>
            }
        </div >
    );
}

export default ResultCard;