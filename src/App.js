import './assets/estilo/estilo.css';
import Header from './componentes/header';
import Form from './componentes/formulario';
import SectionStatics from './componentes/sectionStatics';
import Footer from './componentes/footer';
function App() {

  return (
    <div className="App width">
      <Header />
      <main className="paddinglr-10 width">
        <h1>More than just shorter links</h1>
        <p>Build your brands recognition and get detailed insights
          on how your links are performing</p>
        <button className="button get-started cursor">Get Started</button>
      </main>
      <Form />
      <SectionStatics />
      <section id="boost">
        <h2>Boost your links today</h2>
        <button className="button get-started cursor">Get Started</button>
      </section>
      <Footer />
    </div>
  );
}

export default App;
