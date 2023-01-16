import Header from './header/Header';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main 
        id="content" 
        className="z-20 mt-20 md:mx-12 lg:mx-20 px-4"
      >
        {children}
      </main>
    </>
  );
}