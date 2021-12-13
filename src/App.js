import image from './assets/images/image.jpeg'
import './App.css'
import CV from 'react-cv'

function App() {
  return (
    <CV
      personalData={{
        name: 'Alysson Aldrin',
        title: 'Programming Trainee',
        image: image,
        contacts: [
          { type: 'email', value: 'alysson_cdf@hotmail.com' },
          { type: 'phone', value: '+55 (83)993940459' },
          { type: 'location', value: 'Cajazeiras-PB, Brazil' },
          { type: 'website', value: 'alyssonaldrin.github.io' },
          {
            type: 'linkedin',
            value: 'www.linkedin.com/in/alysson-aldrin-9aab15125/',
          },
          { type: 'github', value: 'github.com/alyssonaldrin' },
        ],
      }}
      sections={[
        {
          type: 'text',
          title: 'Career Profile',
          content: `Full Stack Developer. Graduating in Analysis and Systems Development at Instituto Federal de Educação,
          Ciência e Tecnologia da Paraíba (IFPB) - Campus Cajazeiras and Graduated in Civil Engineering at Instituto 
          Federal de Educação, Ciência e Tecnologia da Paraíba (IFPB) - Campus Cajazeiras, where I discovered my passion 
          for T.I, winning one Programming Contest, developing some civil engineering related software, where one of them 
          was my final paper.

          Currently I'm focusing in develop solutions in front-end, especially on react, respecting the user experience,
           solution design and code quality.`,
          icon: 'usertie',
        },
        {
          type: 'common-list',
          title: 'Education',
          icon: 'graduation',
          items: [
            {
              title: "Bachelor's Degree Civil Engineering",
              authority: 'IFPB - Cajazeiras',
              authorityWebSite: 'https://www.ifpb.edu.br',
              rightSide: '2014 - 2019',
            },
            {
              title: 'Technologist in Systems Analysis and Development',
              authority: 'IFPB - Cajazeiras',
              authorityWebSite: 'https://www.ifpb.edu.br',
              rightSide: '2021 - Present',
            },
          ],
        },
        {
          type: 'experiences-list',
          title: 'Experiences',
          icon: 'archive',
          items: [
            {
              title: 'Intern',
              company: 'CWI Software',
              description:
                'Developing solutions, on React(Next).ts and APS.NET.',
              companyWebSite: 'https://cwi.com.br',
              datesBetween: '2021.09 - Present',
              descriptionTags: ['React', 'ASP.NET', 'Typescript'],
            },
          ],
        },
        {
          type: 'common-list',
          title: 'Languages',
          icon: 'language',
          items: [
            {
              authority: 'Portuguese',
              authorityMeta: 'Native Language',
            },
            {
              authority: 'English',
              authorityMeta: 'Intermediary to Advanced',
            },
            {
              authority: 'Spanish',
              authorityMeta: 'Can understand',
            },
          ],
        },
        {
          type: 'tag-list',
          title: 'Skills Proficiency',
          icon: 'rocket',
          items: ['React', 'C#', 'Javascript', 'Typescript', 'ASP.NET', 'Node'],
        },
        {
          type: 'tag-list',
          title: 'Hobbies & Interests',
          icon: 'cubes',
          items: ['Strategy Games', 'RPG'],
        },
      ]}
      branding={true}
    />
  )
}

export default App
