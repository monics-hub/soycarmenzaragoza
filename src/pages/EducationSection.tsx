import { Award, GraduationCap } from "lucide-react"
import EducationCard from "../components/EducationCard"
import EducationVector from "../components/EducationVector"

export default function EducationSection(){
    return(
        <section id="educacion" className="py-6 xl:py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-brand mb-12 text-center">Educación</h2>
          <div className="grid lg:grid-cols-2 gap-6 items-center">
              <div className="space-y-6">
                <EducationCard
                  date="2020–2022"
                  title="Especialización en Equidad de Género"
                  institution="Instituto Tecnológico de Monterrey"
                  icon={Award}
                />

                <EducationCard
                  date="2016"
                  title="Inglés Avanzado nivel C1"
                  institution="Certificación TOEFL, ETS"
                  icon={GraduationCap}
                />

                <EducationCard
                  date="1993-1997"
                  title="Licenciatura en Derecho"
                  institution="Universidad Nacional Autónoma de México (UNAM)"
                  icon={GraduationCap}
                />
              </div>
            
            <div className="flex justify-center">
              <EducationVector/>
            </div>
          </div>    
        </div>
      </section>
    )
}