//// This is the data for the hero section
import profilePicture from '@/assets/me.png'
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
// import sparrowsImage from '@/assets/sparrows.jpg'
// import selmapImage from '@/assets/sel_map.png'

export const research: ResearchInfo[] = [
  {
    image: exoImage,
    title: 'Human-Interface Dynamics of Knee Exoskeletons with Lateral and Anteroposterior Attachment',
    authors: [
      'Yichen Wang',
      'José Montes Pérez',
      'Challen Enninful Adu',
      'Robert D Gregg',
      'Gray C. Thomas',
    ],
    journal: '2025 International Conference On Rehabilitation Robotics (ICORR)',
    time: '2025',
    link: 'https://ieeexplore.ieee.org/abstract/document/11062962',
    review: false,
  },
];

//// This is the data for the projects
import { type ProjectsList } from '@/types';
// import sevaImage from '@/assets/seva.jpeg'
// import zonopyImage from '@/assets/zonopy.webp'
// import marlImage from '@/assets/marl.webp'
// import ddpgFetchImage from '@/assets/ddpg_fetch.webp'
// import rtdImage from '@/assets/rtd.gif'
// import lineartDiffusionImage from '@/assets/lineart_diffusion.webp'

export const projectsLists: ProjectsList[] = [
  {
    title: 'Contributor',
    items: [
    {
      title: 'CleanTwrpTar',
      info: 'Basic C program written to recover my corrupted phone backups',
      description: 'Back in 2017, I was restoring my phone from a TWRP nandroid backup, and discovered that all of my backups were corrupted. '+
        'After inspection, it turned out that one of the other standard streams used for verbose logging occasionally output to the tarfile. ' +
        'This program was written to remove strings inserted between the 512 byte data block boundaries where these logging strings were inserted. ' +
        'A friend and I wrote separate solutions to this problem, and we have saved countless others\' backups as a result.',
      link: 'https://github.com/BuildingAtom/CleanTwrpTar',
    },
  ]},
];
