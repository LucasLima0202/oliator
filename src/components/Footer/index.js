import './Footer.css'

const Footer = () => {
    return (
        <footer className='background-footer'>
            <div className='icon-social-media'>
                <a href="https://www.linkedin.com/in/lucas-lima-cunha-824b25210/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/lin.png" alt="Linkedin" width={'30em'} />
                </a>
                <a href="https://portfolio-lucaslima022.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/global.png" alt="Portifolio"  width={'30em'} />
                </a>
                <a href="https://github.com/LucasLima0202?tab=repositories" target="_blank" rel="noopener noreferrer">
                    <img src="/images/git.png" alt="GitHub"  width={'30em'} />
                </a>
            </div>
            <div className='logo'>
                <a href="#">
                    <img src="/images/Logo.png" alt="logo"  width={'145em'} />
                </a>
            </div>
            <div>
                <span>Desenvolvido por Lm4s</span>
            </div>

        </footer>
    )
}

export default Footer



