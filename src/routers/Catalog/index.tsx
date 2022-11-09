import "./styles.css";
import Header from "../../components/Header";
import CardCar from "../../components/CardCar";
import CardComment from "../../components/CardComment";
import Footer from "../../components/Footer";
export default function Catalog() {
  return (
    <>
      <Header />
      <main className="dcr-main">
        <section id="dcr-car-section" className="dcr-container">
          <div className="dcr-cars-container">
            <h1>Venha nos visitar</h1>
            <CardCar />
            <CardCar />
          </div>
        </section>
        <section id="dcr-comment-section" className="dcr-container">
          <div className="dcr-comments-container">
            <h1>O que estão dizendo</h1>
            <CardComment />
            <CardComment />
            <CardComment />
            <CardComment />
            <CardComment />
            <CardComment />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
