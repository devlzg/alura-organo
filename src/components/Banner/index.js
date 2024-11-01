import imagemBanner from '../../images/banner.png'
import "./Banner.css"

export default function Banner() {
    return (
        <header className="banner">
            <img className="bannerImg" src={imagemBanner} alt="Imagem do banner"/>
        </header>
    )
}