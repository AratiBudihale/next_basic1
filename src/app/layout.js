import Footer from '@/Footer';
import Header from '@/Header';
import Menu from '@/Menu';
import 'bootstrap/dist/css/bootstrap.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
     <Header/>
     <Menu/>
      {children}
      
      <Footer/>
      </body>
    </html>
  );
}


