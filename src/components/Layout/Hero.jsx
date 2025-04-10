import heroImg from '../../assets/rabbit-hero.webp';

const Hero = () => {  
  return (
    <div>
      <section className="relative">
        <img 
          src={heroImg} 
          alt="Rabbit" 
          className="w-full h-[400px] lg:h-[750px] object-cover" // Fixed class name
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"> {/* Fixed bg-opacity */}
          <div className="text-center text-white p-6"> {/* Fixed text-white and added p-6 */}
            <h1 className="text-4xl md:text-9xl font-bold tracking-tighter uppercase mb-4">
              Vacation <br /> Ready
            </h1>
            <p className="text-sm tracking-tighter md:text-lg mb-6">
              Explore our vacation-ready outfits with fast worldwide shipping.
            </p>
            <Link to="#" className="bg-white text-gray-950 px-6 py-2 rounded-sm text-lg">
              Shop Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;