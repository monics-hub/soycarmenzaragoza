import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactSection(){
    return(
        <section id="contacto" className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-brand mb-8">Contacto</h2>
          <p className="text-gray-300 text-xl mb-12">
            Para solicitudes relacionas con el departamento de Desarrollo Social de Venustiano Carranza.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div data-aos="zoom-out-down" className="flex flex-col items-center">
              <div className="w-16 h-16 bg-brand-bright rounded-full flex items-center justify-center mb-4">
                <Mail size={24} className="text-white" />
              </div>
              <h4 className="text-white font-semibold text-lg mb-2">Email</h4>
              <p className="text-gray-300">dir.general.ds@v.carranza.cdmx.gob.mx</p>
            </div>
            
            <div data-aos="zoom-out-down" className="flex flex-col items-center">
              <div className="w-16 h-16 bg-brand-bright rounded-full flex items-center justify-center mb-4">
                <Phone size={24} className="text-white" />
              </div>
              <h4 className="text-white font-semibold text-lg mb-2">Teléfono</h4>
              <p className="text-gray-300">55 5764 9400</p>
            </div>
            
            <div data-aos="zoom-out-down" className="flex flex-col items-center">
              <div className="w-16 h-16 bg-brand-bright rounded-full flex items-center justify-center mb-4">
                <MapPin size={24} className="text-white" />
              </div>
              <h4 className="text-white font-semibold text-lg mb-2">Ubicación</h4>
              <p className="text-gray-300">Venustiano Carranza, CDMX</p>
            </div>
          </div>
          
          <div className="bg-gray-800 p-8 rounded-2xl">
            <p className="text-gray-300 text-lg italic">
              "La justicia es la primera virtud de las instituciones sociales, 
              como la verdad lo es de los sistemas de pensamiento."
            </p>
          </div>
        </div>
      </section>
    )
}