import "@fontsource-variable/montserrat";

interface Experience {
    date: string;
    role: string;
    description: string;
    image: string;
}

interface ExperienceProps {
    title: string;
    experiences: Experience[];
}

export default function ExperiencesCard({
  title,
  experiences,
}: ExperienceProps) {
  return (
    <div className="flex flex-col items-center m-5 w-[320px] h-[560px] bg-white rounded-xl shadow-lg">
      <div className="flex justify-start w-full p-4">
        <h1 className="font-Monserrat font-medium text-lg text-[#828282]">
          {title}
        </h1>
      </div>
      {experiences.map((experience, index) => {
        return (
          <div className="flex w-full items-start mt-6">
            <div className=" m-4 w-24 h-20">
            <img className="h-[50%] w-[100%]" key={index} src={experience.image} alt="" />
            </div>
            <div className="flex flex-col gap-2">
                <p className="font-Monserrat font-medium text-sm text-[#828282]">{experience.date}</p>
                <p className="font-Monserrat font-medium text-base text-[#333]">{experience.role}</p>
                <p className="text-left w-[90%] font-Monserrat font-medium text-base text-[#828282]">{experience.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
