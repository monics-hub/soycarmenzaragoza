import { Building, Award, Scale } from 'lucide-react'

export default function RecognitionSection(){
    return(
        <section id="reconocimientos" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-brand mb-12 text-center">Reconocimientos</h2>
          
          <div data-aos="flip-up" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-2xl text-center hover:bg-gray-750 transition-colors">
              <div className="w-16 h-16 bg-brand-bright rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="text-white" size={24} />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Nombramiento como Directora</h4>
              <p className="text-gray-300 mb-2">Alcaldía Venustiano Carranza</p>
              <p className="text-brand font-semibold">2021</p>
            </div>
            
            <div data-aos="flip-up" className="bg-gray-800 p-8 rounded-2xl text-center hover:bg-gray-750 transition-colors">
              <div className="w-16 h-16 bg-brand-bright rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-white" size={24} />
              </div>
              <h4 className="text-xl font-bold text-white mb-4"> Premio "Red de Mujeres Constructoras de Paz"</h4>
              <p className="text-gray-300 mb-2">Senado de la República</p>
              <p className="text-brand font-semibold">2022</p>
            </div>
            
            <div data-aos="flip-up" className="bg-gray-800 p-8 rounded-2xl text-center hover:bg-gray-750 transition-colors">
              <div className="w-16 h-16 bg-brand-bright rounded-full flex items-center justify-center mx-auto mb-6">
                <Scale className="text-white" size={24} />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Servidor Público Destacado</h4>
              <p className="text-gray-300 mb-2">Gobierno de la Ciudad de México</p>
              <p className="text-brand font-semibold">2024</p>
            </div>
          </div>
        </div>
      </section>
    )
}