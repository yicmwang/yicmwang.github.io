//// This is the data for the hero section
import profilePicture from '@/assets/me.jpg'
export const heroBlurb = {
  profilePicture: profilePicture,
  paragraphs: [
    'I am a robot researcher and engineer, working on developing hardware and software infrastructure ' +
    'for agile and dextrous walking robots.'
    ,
    'I am completing my MS in Robotics from the Department of Robotics at the University ' +
    'of Michigan. I am a member of the ARCaD Lab, advised by Prof. Yanran Ding. ' +
    'I also completed my BS in Mechanical Engineering from ' +
    'the University of Michigan in 2025.'
  ]
}

//// This is the data for any social links
import { type Socials } from '@/types'

export const socials: Socials[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/yicmwang/',
    icon: '<i class="bi bi-github"></i>', // Find this from Bootstrap Icons or Academic Icons
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/yichen-wang-77788b252/',
    icon: '<i class="bi bi-linkedin"></i>',
  },
  {
    label: 'Google Scholar',
    href: 'https://scholar.google.com/citations?user=S7uwOAEAAAAJ&hl=en',
    icon: '<i class="ai ai-google-scholar-square ai-lg"></i>', // Always use the ai-lg class for Academic Icons
  },
];

//// This is the data for the research works
import { type ResearchInfo } from '@/types';
import exoImage from '@/assets/exoImage.png'
import hopperImage from '@/assets/hopperv1.webp'
// import selmapImage from '@/assets/sel_map.png'

export const research: ResearchInfo[] = [
  {
    image: exoImage,
    title: 'Human-Interface Dynamics of Knee Exoskeletons with Lateral and Anteroposterior Attachment',
    authors: [
      'Yichen Wang',
      'José Montes Pérez',
      'Robert D Gregg',
      'Gray C. Thomas',
    ],
    journal: '2025 International Conference On Rehabilitation Robotics (ICORR)',
    time: '2025',
    link: 'https://ieeexplore.ieee.org/abstract/document/11062962',
    review: false,
  },
  {
    image: hopperImage,
    title: 'Kinodynamic Model Predictive Control for Energy Efficient Locomotion of Legged Robots with Parallel Elasticity',
    authors: [
      'Yulun Zhuang',
      'Yichen Wang',
      'Yanran Ding',
    ],
    journal: '2025 IEEE International Conference on Robotics and Automation (ICRA)',
    time: '2025',
    link: 'https://ieeexplore.ieee.org/abstract/document/11128416/',
    review: false,
  }
];

//// This is the data for the projects
import { type ProjectsList } from '@/types';
// import sevaImage from '@/assets/seva.jpeg'
import mpccbfImage from '@/assets/tkImage.gif'
import { hasAssetPropagationFlag } from 'node_modules/astro/dist/content/utils';
// import marlImage from '@/assets/marl.webp'
// import ddpgFetchImage from '@/assets/ddpg_fetch.webp'
// import rtdImage from '@/assets/rtd.gif'
// import lineartDiffusionImage from '@/assets/lineart_diffusion.webp'



export const ongoingWork: ProjectsList[] = [
  {
    title: 'Ongoing and Unpublished Work',
    items: [
    {
      // image: mpccbfImage,
      title: 'Power Hat for Computing Module in Bipedal Robot',
      info: 'Power Supply, Protection, and Monitoring Hat for Robot Onboard SBC',
      description: 'I lead the project to design a power supply and control hat, compatible with the Rasberry Pi and UP Xtreme i14 SBCs. ' +
                   'The board consists of a buck converter capable of either 5V/5A or 25V/4A output, a power switch to supply 50V/80A to 4 motor chains, ' + 
                   'overcurrent, undervoltage, and overtemperature protection circuits, and a voltage, current, and temperature moinotor system.',
      // link: '',
    },
  ]},

];


export const projectsLists: ProjectsList[] = [
  {
    title: 'Contributor',
    items: [
    {
      image: mpccbfImage,
      title: 'Online Adaptive ICCBF',
      info: 'Learning to Refine Input Constrained Control Barrier Functions via Uncertainty-Aware Online Parameter Adaptation',
      description: 'I helped Taekyung Kim write simple a 3D quadcopter model and controller for the adaptive ICCBF controller as a part of a course project. ' +
                   'Although I did not contribute enough work for authorship, it was a valuable introduction to optimization based control for robots for me.',
      link: 'https://www.taekyung.me/online-adaptive-cbf',
    },
  ]},

];