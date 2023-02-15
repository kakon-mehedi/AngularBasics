import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  features = [
    {
      id: 1,
      featureName: 'One-to-One Live Class',
      imageUrl: 'assets/images/features/1.jpg',
    },

    {
      id: 2,
      featureName: 'Visual progress report for parent',
      imageUrl: 'assets/images/features/2.jpg',
    },

    {
      id: 3,
      featureName: 'Set class time according to Your choice',
      imageUrl: 'assets/images/features/3.jpg',
    },

    {
      id: 4,
      featureName:
        'World-class well researched curriculum and Trained teachers',
      imageUrl: 'assets/images/features/4.jpg',
    },

    {
      id: 5,
      featureName: 'Government Recognized',
      imageUrl: 'assets/images/features/5.jpg',
    },

    {
      id: 6,
      featureName: 'High quality service with 9.5 parent rating',
      imageUrl: 'assets/images/features/6.jpg',
    },
  ];

  benefits = [
    {
      featureId: 1,
      benefitDetails:
        'In tinkers, we believe learning should be interactive and fun. Amra bacchader physiology bujhe tar jei topic valo lage sei topic onujayi personalzed content diye bangla shekhai so that learning ta tar kache fun & engaging hoy',
    },

    {
      featureId: 2,
      benefitDetails: "Your child's visual Progress Report",
    },

    { featureId: 2, benefitDetails: 'Before and After email. ' },

    { featureId: 2, benefitDetails: 'Learning outcome after every class. ' },

    {
      featureId: 3,
      benefitDetails:
        "We understand that  your child has a busy schedule. That's why we are flexible about setting class time. You can set class time according to your choice when your child is available to take the class",
    },
    {
      featureId: 3,
      benefitDetails:
        "You don't have to think about any timezone barrier as well. Just set your classtime according to your timezone, our teacher will take the class ",
    },

    {
      featureId: 4,
      benefitDetails:
        'Developed a curriculum that can provide a personalized learning experiences',
    },

    {
      featureId: 4,
      benefitDetails:
        'The curriculum was developed by the top university graduates from  IER + Education research department.',
    },

    {
      featureId: 5,
      benefitDetails: 'Registered limited company',
    },

    {
      featureId: 5,
      benefitDetails:
        'Got a National award for providing Bangla learning services worldwide. ',
    },

    {
      featureId: 5,
      benefitDetails:
        'Featured in the national newspaper for providing Bangla learning service to the non-resident Bangladeshi children. ',
    },

    {
      featureId: 6,
      benefitDetails:
        'Average 9.5 user ratings for our class quality and service',
    },
    {
      featureId: 6,
      benefitDetails:
        'Our children got featured as well in the national newspaper for sharing their Bangla learning success stories',
    },
  ];

  tribiute = [
    {
      id: 1,
      title: 'This is How They Tribute!',
      description:
        'Children leanring Bangla in Tinkers AmarVasha from the USA sing a tribute to the Language Heroes.',
      videoLink: 'https://youtube.com/embed/cvf6xauDPZ0',
    },

    {
      id: 2,
      title: 'Parents Still Love Bengali',
      description:
        'Living outside of our country doesn’t mean I forgot my root. I can feel the warmth of my country when I teach, speak, and sing in Bangla with my son and daughter. And I bet every parent will feel the same. That’s what our parents think!',
      videoLink: 'https://youtube.com/embed/uJGd0Fd2Xyw',
    },

    {
      id: 3,
      title: 'Neiloy Can Count 1-20 in Bangla Now!',
      description:
        'Niloy can now count in Bangla! In tinkers AmarVasha childreen are re-discovering the fun of learning Bangla',
      videoLink: 'https://youtube.com/embed/DzbT39P2tXk',
    },

    {
      id: 3,
      title: 'Ammu Ke Bhalobashi',
      description:
        'This is Sofia. She lives in McAllen, Texas, with her parents. She created a card for her mother and wrote a message in Bangla in the Card – “Ammu Ke Bhalobasi”.',
      videoLink: 'https://youtube.com/embed/F6fBr23E-M8',
    },

    {
      id: 4,
      title: 'We Let Kids Be Their Self',
      description:
        'Every child is unique. The way they think is unique. Their creativity is unique. We just ask them to do things, and they do it their way!',
      videoLink: 'https://youtube.com/embed/n8yLX-NxP6s',
    },

    {
      id: 5,
      title: 'Peer Learning is Fun too!',
      description:
        'Peer learning provides the space to learn with collaboration and fun. The learning rate is achived much higher in peer learning classes. Our peer classes are very much fun and attractive too.',
      videoLink: 'https://youtube.com/embed/3rvxo_iw7a4',
    },
  ];
}
