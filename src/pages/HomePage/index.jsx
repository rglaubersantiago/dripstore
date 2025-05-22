import Header from "../../components/Header/index.jsx"
import WhiteSneakers from '../../assets/WhiteSneakers.png'
import ornament from '../../assets/ornament.svg'
import './style.css'

function HomePage() {

    return (
        <>
            <Header />
            <main>
                <section>
                    <div id="carousel-hero" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carousel-hero" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carousel-hero" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carousel-hero" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active container-item">
                                <div class="d-flex">
                                    <div id="texto-ofertas">
                                        <h3>Melhores ofertas personalizadas</h3>
                                        <h1>Queima de stoque Nike 🔥</h1>
                                        <p>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
                                        <a src="#" alt="Link em formato de botão para ver ofertas">Ver Ofertas</a>
                                    </div>
                                    <img id="whiteSneakers" src={WhiteSneakers} class="d-block" alt="Imagem de tênis branco da marca AIR" />
                                    <img id="ornament" src={ornament} class="d-block" alt="Imagem de um circulo formado por pontos amarelos." />
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="https://horizonteambiental.com.br/wp-content/uploads/2023/03/Natureza-qual-a-sua-importancia-na-vida-das-pessoas.jpg" class="d-block w-100" alt="..." />
                            </div>

                            <div class="carousel-item">
                                <img src="https://images.trustinnews.pt/uploads/sites/5/2024/08/240823_field-6574455_1920-638x414.jpg" class="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carousel-hero" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carousel-hero" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </section>
            </main>
        </>
    )
}

export default HomePage