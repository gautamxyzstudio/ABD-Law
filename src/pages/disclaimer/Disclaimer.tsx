import HeroSection from "../../components/heroSection/HeroSection";

const Disclaimer = () => {
  return (
    <>
      <HeroSection title="Disclaimer" />
      <section className="xl:pt-20 md:pt-16 pt-12 xl:px-[150px] md:px-13 px-6 xl:text-3xl md:text-2xl text-xl">
        The information contained on this website is provided for general
        informational purposes only and does not constitute legal advice or
        create a lawyer–client relationship between you and <b>ABD LAW CORPORATION</b>.
        You should not act or refrain from acting based on any information on
        this site without seeking appropriate legal counsel. While we strive to
        keep the information accurate and up to date, <b>ABD LAW CORPORATION</b> makes
        no representations or warranties of any kind regarding its completeness,
        accuracy, reliability, or suitability. Any communication submitted
        through this website may not be secure and does not create a
        lawyer–client relationship. If you require legal advice, please contact
        a qualified lawyer directly.
      </section>
    </>
  );
};

export default Disclaimer;
