import ExperienceCard from "../components/ExperienceCard"
export default function ExperienceSection(){
    return(
        <section id="experiencia" className="pt-12 pb-6 xl:pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-brand mb-12 text-center">Experiencia Profesional</h2>
          
          <div className="space-y-8">
            <ExperienceCard
              title="Directora de Desarrollo Social"
              subtitle="Alcaldía Venustiano Carranza"
              date="2021 - Presente"
              bullets={[
                "Gestión 10+ instituciones gubernamentales",
                "Implementación de 30+ programas sociales",
              ]}
              bulletsAlt={[
                "Creación de Casa Violeta",
                "Reducción del 50% en los tiempos de respuesta",
              ]}
            />

            <ExperienceCard
              title="Subdirectora de Equidad de Género y Desarrollo Social"
              subtitle="Alcaldía Venustiano Carranza"
              date="2018 - 2021"
              bullets={[
                "Elaboración de 25+ reglamentos y manuales",
                "Análisis y dictaminación de proyectos de ley",
              ]}
              bulletsAlt={[
                "Modernización del marco regulatorio",
                "Capacitación a servidores públicos",
              ]}
            />

            <ExperienceCard
              title="Servidora Pública en el Area Jurídica"
              subtitle="Alcaldía Venustiano Carranza"
              date="2016 - 2018"
              bullets={[
                "Controversias constitucionales y juicios de amparo",
                "Asesoría jurídica especializada",
              ]}
              bulletsAlt={[
                "Representación legal del gobierno",
                "Defensa en tribunales federales",
              ]}
            />
            
          </div>
        </div>
      </section>
    )
}