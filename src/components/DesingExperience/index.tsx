import React from 'react';

type Tool = {
  id: number;
  name: string;
  level: string;
};

type DesingExperiencesProps = {
  technologiesProps: Tool[];
  developmentArea: string;
};

export default function DesingExperiences({developmentArea, technologiesProps}: DesingExperiencesProps) {
  return (
    <div className="flex flex-col items-center w-[415px] h-[175px] bg-white rounded-xl shadow-lg">
        <div className='flex items-start w-[90%] pt-3'>
            <h1 className="font-Monserrat font-semibold text-lg text-[#4F4F4F]">{developmentArea}</h1>
        </div>
            {technologiesProps.map((tool, index)=> {
                return (
                  <div className="flex flex-row items-center justify-between w-[90%] mt-6">
                    <div className="items-start w-[50%]">
                      <p
                        key={index}
                        className="font-Monserrat font-semibold text-[#4F4F4F] text-sm"
                      >
                        {tool.name}
                      </p>
                    </div>
                    <div className=' bg-[#C4C4C4] w-[90%] h-2 rounded-lg'>
                        <div className={`h-full w-[${tool.level}] bg-[#2F80ED] rounded-lg`}></div>
                    </div>
                  </div>
                );
            })}
    </div>
  )
}
