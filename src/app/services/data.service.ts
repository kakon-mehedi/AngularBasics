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
}
