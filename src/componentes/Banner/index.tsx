import './Banner.css';

interface BannerProps {
    enderecoImagem: string
    textoAlternativo?: string
}

export const Banner = ({ enderecoImagem, textoAlternativo }:BannerProps) => {
    return (
        <header className="banner">
            <img src={enderecoImagem} alt="O banner principal da página do Organo"/>
        </header>
    )
}

export default Banner;