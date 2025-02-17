import Header from '../../components/Header'
import Footer from '../../components/Footer'

import '../../assets/styles/error.scss'
import '../../assets/styles/variables.scss'

function ErrorPage() {
    return (
      <div className='error'>
        <Header />
        <div className='error__main'>
          <h1>404</h1>
          <h2 className='error__main-text'>Oups ! La page que vous demandez n'existe pas.</h2>
          <a href="/" className='error__main-link'>Retourner sur la page d'accueil</a>
        </div>
        <Footer />
      </div>      
    );
};
  
export default ErrorPage; 