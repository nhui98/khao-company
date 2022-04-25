import Member from "./member";

const Aboutus: React.FC = () => {
  return (
    <section className={`flex flex-col bg-white py-20 text-3xl md:text-4xl`}>
      About us
      <div className="container mx-auto px-11">
        <p className="leading-tight max-w-5xl mx-auto text-4xl tracking-light">
          <strong>We will help you ship slower apps</strong>
          Our team of novice engineers has created some of the worst user
          experiences in some of the most unknown apps worldwide.
        </p>
      </div>
      <div className="container mx-auto px-11 text-center mt-28">
        <h2>Our Team</h2>
        <div>the &ldquo;spec-ops&rdquo;</div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-20">
          <Member
            name="khao"
            socialId="@khao"
            link="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          />
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
