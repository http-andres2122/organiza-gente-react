import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
    <div className='redes'>
        <a href='https://http-andres2122.github.io/Portafolio-IABB-2023/'>
            <img src="/img/facebook.png" alt='Facebook' />
        </a>
        <a href='https://http-andres2122.github.io/Portafolio-IABB-2023/'>
            <img src="/img/twitter.png" alt='twitter' />
        </a>
        <a href='https://www.instagram.com/http.andres2122/'>
            <img src="/img/instagram.png" alt='instagram' />
        </a>
    </div>
    <img src='/img/Logo.png' alt='org' />
    <strong>Desarrollado por <a href="https://github.com/http-andres2122">http.andres2122</a> | &copy; 2023</strong>
</footer>

}

export default Footer