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
      ]}
      branding={true}
    />
  )
}

export default App
