import CardProfile from '../CardProfile';
import miImagen from '../../assets/images/img_profile.webp';
import Experiences from '../Experiences';
import DesingExperiences from '../DesingExperience';
import CardProject from '../CardProject';
import Bar from '../Bar';
import ExperiencesCard from '../ExperiencesCard';

import image from '../../assets/images/ABAE.webp'
import image2 from '../../assets/images/ico_travelli.webp'
import image3 from '../../assets/images/Portada_Travelli.png'
import image4 from '../../assets/images/myApp.png'
import image5 from '../../assets/images/responsive-desing.png'




const technology = [
  {
    id: 1,
    name: 'React',
    level: '70%'
  },

  {
    id: 2,
    name: 'React Native',
    level: '70%'
  },

  {
    id: 3,
    name: 'Node Js',
    level: '90%'
  },

  {
    id: 4,
    name: 'JavaScript',
    level: '90%'
  },

  {
    id: 5,
    name: 'TypeScript',
    level: '60%'
  }
];

const tools = [
  {
    id: 1,
    name: 'Figma',
    level: '60%'
  },

  {
    id: 2,
    name: 'Adobe Illustrator',
    level: '80%'
  }
];

const experiences = [
  {
    date: "June 2019 - Current",
    role: "PI-4 PASO 1",
    description: "Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
    image: image
  },
  {
    date: "Feb 2022 - Current",
    role: "COO & Front-end developer",
    description: "Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
    image: image2
  },
];

const technologiesTravelli = [
  {
    id: 1,
    name: "ReactNative"
  },
  {
    id: 2,
    name: "TypeScript"
  },
  {
    id: 3,
    name: "UX/UI"
  },
  {
    id: 4,
    name: "Figma"
  }
];

const technologiesMyApp = [
  {
    id: 1,
    name: "ReactNative",
  },
  {
    id: 2,
    name: "NativeBase"
  },
  {
    id: 3,
    name: "UI/UX"
  }
];

const technologiesResponsive = [
  {
    id: 1,
    name: "HTML",
  },
  {
    id: 2,
    name: "CSS"
  },
  {
    id: 3,
    name: "UI/UX"
  }
];
export default function Main() {
  return (
    <div className="flex justify-center flex-1 pb-20">
      <div className="flex flex-wrap flex-row max-w-7xl">
        <div className="flex flex-col tablet:flex-row tablet:justify-center tablet:w-full phone:flex-wrap">
          <CardProfile
            name="Jose Carrizales"
            email="carrizalesj5@gmail.com"
            profession="Front-end developer"
            phone="+584144001564"
            aboutMe="Self-motivated developer, who is willing to learn and create outstanding UI applications."
            image={miImagen}
          />
          <ExperiencesCard title="Experiences" experiences={experiences} />
        </div>
        <div className="flex flex-col justify-start w-[60%] min-w-[600px] tablet:w-[80%] tablet:ml-[10%]">
          <div className="flex flex-row gap-4 mt-5">
            <Experiences
              technologiesProps={technology}
              developmentArea="Front End"
            />
            <DesingExperiences
              technologiesProps={tools}
              developmentArea="Desing"
            />
          </div>
          <div className="flex flex-col gap-2 mt-2 justify-center w-[100%]">
            <Bar description="Projects" cant={3} />
            <div className="flex flex-wrap flex-col gap-6">
              <CardProject
                title="Travelli"
                description="Travelli es una innovadora plataforma digital diseñada para revolucionar la forma en que las agencias de viaje y los viajeros interactúan en el mercado de viajes y excursiones en Venezuela. "
                image={image3}
                technologies={technologiesTravelli}
                link={""}
              />

              <CardProject
                title="My App React Native"
                description="Aplicacion construida con React Native Para fines Demostrativos"
                image={image4}
                technologies={technologiesMyApp}
                link={"#"}
              />

              <CardProject
                title='Responsive Desing App'
                description='Applicacion Diseñada con HTML y CSS de manera responsive'
                technologies={technologiesResponsive}
                image={image5}
                link="https://dcrd-3.vercel.app/"
              />
            </div>
            <Bar description="Blogs" cant={1} />
          </div>
        </div>
      </div>
    </div>
  );
}
