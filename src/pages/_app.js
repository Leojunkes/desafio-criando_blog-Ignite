
import Header from '../components/Header';

import '../styles/globals.scss';
import { AuthProvider } from './utils/contextCadastro';

function MyApp({ Component, pageProps }) {
  return (
   <AuthProvider >
      <Header />
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
