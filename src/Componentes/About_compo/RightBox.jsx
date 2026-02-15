const skills = [
  { name: 'Git', icon: '/src/lanLogo/git.svg', angle: '0deg' },
  { name: 'React', icon: '/src/lanLogo/react.svg', angle: '45deg' },
  { name: 'Node', icon: '/src/lanLogo/nodejs.svg', angle: '90deg' },
  { name: 'JS', icon: '/src/lanLogo/javascript.svg', angle: '135deg' },
  { name: 'Tailwind', icon: '/src/lanLogo/tailwindcss.svg', angle: '180deg' },
  { name: 'Python', icon: '/src/lanLogo/python.svg', angle: '225deg' },
  { name: 'TS', icon: '/src/lanLogo/typescript.svg', angle: '270deg' },
  { name: 'Mongoose', icon: '/src/lanLogo/mongoose.svg', angle: '315deg' },
];

const RightBox=()=>{

   return (
    <div className="relative flex items-center justify-center w-full h-125 perspective-1000 top-30">
      <div className="absolute w-32 h-32 bg-purple-600/30 rounded-full blur-[60px]" />

      <div className="relative w-100 h-100 rounded-full border border-white/5 rotate-x-60 animate-orbit">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 w-12 h-12 -ml-6 -mt-6"
            style={{
              transform: `rotate(${skill.angle}) translateX(200px)`,
            }}
          >
            <div className="animate-orbit-reverse rotate-x--60">
               <img 
                src={skill.icon} 
                alt="" 
                className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]" 
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default RightBox;