export default function WhoIAmSection(){
    const name = "María del Carmen Zaragoza González"
    const position = "Directora General de Desarrollo Social"

    return (    
        <section className="py-6 xl:py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-brand mb-8 text-center">Quién Soy</h2>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  Mi nombre es {name}. Y soy la {position} en la alcadía Venustiano Carranza de la Ciudad de México.
                </p>
                <p>
                  He realizado diversas proyectos en beneficio a la comunidad entre los cuales se incluyen
                  la apertura de "Casa Violeta" en el año 2021 con el fin apoyar a las mujeres, jóvenes, adultos
                  mayores, comunidad LGBT+, así como personas en situación vulnerable en general a través de 
                  brindar servios jurídicos así como de atención psicólogica en casos de violencia. Así como
                  también otras instituciones como albergues, casas hogar, y mútiples convocatorias para apoyos
                  económicos.
                </p>
              </div>

            <div className="flex justify-center">
              <div className="relative flex flex-col items-center">
                <div data-aos="zoom-in-up" className="w-64">
                  <img src="carmen1.jpg" alt="Foto con alcaldesa"/>
                </div>
                <p className="mt-2 text-sm text-gray-200 max-w-[280px]">
                    "Nombramiento como Directora por parte de la alcadesa Evelyn Parra."</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    )
}