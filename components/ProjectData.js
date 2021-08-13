import gas360Logo from '@/assets/images/gas360shot.png'
import aeiexams from '@/assets/images/aeiexams.png'
import covid from '@/assets/images/Covid19.png'
import grandrock from '@/assets/images/grandrock.png'

const Projects = [
  {
    id: 1,
    title: 'Gas360',
    desc: 'Gas360 is a Nigeria company that deals in gas selling, which has also took the techniques of the business to the high level, where by users can order for thier gas online, then get thier gas delivered to them in thier preffered location. Also they keep the track of gas usage, gas location of thier customers.',
    image : gas360Logo,
    stacks : ['JavaScript', 'Vue', 'Vuex', 'Vue-Router', 'Firebase', 'Boostrap'],
    link : 'https://gas360.io'
},
  {
    id: 2,
    title: 'online test app',
    desc: 'The App was built in courstesy of AEI(Academic Excellence Initative), for University Propective Candidates or Admission Seekers. Which is aimed to help them in Preparatory test against thier enterance examination into the university/polytechnic and geting aquainted and familiar with the univertsity examination system',
    image : aeiexams,
    stacks : ['JavaScript', 'React', 'React-Router', 'Css'],
    link : 'https://aeiexams.netlify.app'
},
  {
    id: 3,
    title: 'Covid Update',
    desc: 'The SPA(single Page App) was built during the outbreak of deadly corona virus (2020), Which automaticallly fetches the live update and counting of the affected, dead, recovered and the likes. Which helps in the awareness of the virus, and protection against it.',
    image : covid,
    stacks : ['JavaScript', 'React', 'Css', 'Material UI'],
    link : 'https://cov19update.netlify.app'
},
  {
    id: 4,
    title: 'GrandRock Estate',
    desc: 'The Grandrock Estate is mini Estate in Abuja. The Website is aimed to get them on net in other to get to the outreach of people and help to gain awareness.',
    image : grandrock,
    stacks : ['JavaScript', 'Html', 'Css', 'Boostrap'],
    link : 'https://grandrock.netlify.app'
},
]

export default Projects;
