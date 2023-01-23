import BackToTop from './BackToTop';
import Footer from './footer/Footer';
import Header from './header/Header';
import SkipToContent from './SkipToContent';

export default function Layout({ children }) {
  return (
    <>
      <SkipToContent />
      <Header />
      <main 
        id="content"
        tabIndex="0"
        className="z-20 mt-20 md:mx-12 lg:mx-20"
      >
        {children}
      </main>
      <BackToTop />
      <Footer />
    </>
  );
}