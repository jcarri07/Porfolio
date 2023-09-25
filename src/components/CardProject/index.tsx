
interface projectsProps {
    title: string;
    description: string;
    image: string;
    link: string;
    technologies: technologie[]
}

interface technologie {
    id: number;
    name: string;
}

export default function CardProject({title, description, image, technologies}: projectsProps) {
  return (
    <div className="flex flex-col justify-center items-center bg-white shadow-lg rounded-lg w-[860px] h-[320px]">
      <div className="flex justify-center items-center h-[90%] w-[95%]">
        <div className="flex justify-center items-center w-[35%] h-[80%] rounded-lg border-gray-200 border-2">
          <img
            className="w-full h-[80%]"
            src={image}
            alt="imagen de proyecto"
          />
        </div>
        <div className="flex m-5 w-full h-[80%]">
          <div className="flex flex-col gap-5">
            <div className="flex w-[full] gap-3">
              {technologies.map((technologie, index) => {
                return (
                  <p
                    key={index}
                    className="font-Monserrat font-medium text-sm text-[#828282]"
                  >
                    #{technologie.name}
                  </p>
                );
              })}
            </div>
            <div className="flex">
              <h1>{title}</h1>
            </div>
            <div className="flex">
              <p className="font-Monserrat font-medium text-sm text-[#828282]">
                {description}
              </p>
            </div>
            <div className="flex w-full gap-2 mt-4">
              <a href="https://www.travellli.com/">
                <button
                  className="mr-4 px-10 py-2 rounded-lg bg-[#2F80ED] text-white"
                  onClick={() => console.log("demo")}
                >
                  Demo
                </button>
              </a>
              <button
                className=" px-10 py-2 rounded-lg border-[#2F80ED] border-2 text-[#2F80ED]"
                onClick={() => console.log("code")}
              >
                Code
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
