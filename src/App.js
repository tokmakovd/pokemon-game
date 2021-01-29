// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Layout from './components/Layout';
import Footer from './components/Footer';

import img2 from './assets/bg2.jpg';
import img3 from './assets/bg3.jpg';

function App() {
  return (
    <>
      <Header title='This is title' descr='This is Description!' />

      <Layout urlBg={img2} />
      <Layout id='2' title='This is title' descr='This is Description!' colorBg='yellow' />
      <Layout urlBg={img3} />

      <Footer />
    </>
  );
}

export default App;
