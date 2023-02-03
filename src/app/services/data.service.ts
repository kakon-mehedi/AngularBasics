import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  numberOfChild = [
    {
      id: 'oneChild',
      text: 'One child',
    },

    {
      id: 'twoChildSeperateClass',
      text: 'Two child seperate class',
    },

    {
      id: 'twoChildMergeClass',
      text: 'Two child Merge class',
    },
  ];

  classPerWeek = [
    {
      id: 'oneChild',
      numberOfClass: 1,
    },

    {
      id: 'oneChild',
      numberOfClass: 2,
    },

    {
      id: 'oneChild',
      numberOfClass: 3,
    },

    {
      id: 'twoChildSeperateClass',
      numberOfClass: 1,
    },

    {
      id: 'twoChildSeperateClass',
      numberOfClass: 2,
    },

    {
      id: 'twoChildSeperateClass',
      numberOfClass: 3,
    },

    {
      id: 'twoChildMergeClass',
      numberOfClass: 1,
    },

    {
      id: 'twoChildMergeClass',
      numberOfClass: 2,
    },

    {
      id: 'twoChildMergeClass',
      numberOfClass: 3,
    },
  ];

  case = [
    {
      id: 'oneChild',
      caseId: 'best',
      text: 'Best case',
    },

    {
      id: 'oneChild',
      caseId: 'optimal',
      text: 'optimal case',
    },

    {
      id: 'oneChild',
      caseId: 'worst',
      text: 'worst case',
    },

    {
      id: 'twoChildSeperateClass',
      caseId: 'best',
      text: 'Best case',
    },

    {
      id: 'twoChildSeperateClass',
      caseId: 'optimal',
      text: 'Optimal case',
    },

    {
      id: 'twoChildMergeClass',
      caseId: 'best',
      text: 'Best case',
    },

    {
      id: 'twoChildMergeClass',
      caseId: 'optimal',
      text: 'Optimal case',
    },
  ];

  price = [
    {
      id: 'oneChild',
      case: 'best',
      classPerWeek: 1,
      priceAmount: 60,
      perClassCost: 15,
    },

    {
      id: 'oneChild',
      case: 'optimal',
      classPerWeek: 1,
      priceAmount: 48,
      perClassCost: 12,
    },

    {
      id: 'oneChild',
      case: 'worst',
      classPerWeek: 1,
      priceAmount: 40,
      perClassCost: 10,
    },

    {
      id: 'oneChild',
      case: 'best',
      classPerWeek: 2,
      priceAmount: 120,
      perClassCost: 15,
    },

    {
      id: 'oneChild',
      case: 'optimal',
      classPerWeek: 2,
      priceAmount: 96,
      perClassCost: 12,
    },

    {
      id: 'oneChild',
      case: 'worst',
      classPerWeek: 2,
      priceAmount: 80,
      perClassCost: 10,
    },

    {
      id: 'oneChild',
      case: 'best',
      classPerWeek: 3,
      priceAmount: 180,
      perClassCost: 15,
    },

    {
      id: 'oneChild',
      case: 'optimal',
      classPerWeek: 3,
      priceAmount: 144,
      perClassCost: 12,
    },

    {
      id: 'oneChild',
      case: 'worst',
      classPerWeek: 3,
      priceAmount: 120,
      perClassCost: 10,
    },

    {
      id: 'twoChildSeperateClass',
      case: 'best',
      classPerWeek: 1,
      priceAmount: 100,
      perClassCost: 12.5,
    },

    {
      id: 'twoChildSeperateClass',
      case: 'optimal',
      classPerWeek: 1,
      priceAmount: 96,
      perClassCost: 12,
    },

    {
      id: 'twoChildSeperateClass',
      case: 'best',
      classPerWeek: 2,
      priceAmount: 190,
      perClassCost: 11.88,
    },

    {
      id: 'twoChildSeperateClass',
      case: 'optimal',
      classPerWeek: 2,
      priceAmount: 176,
      perClassCost: 11,
    },

    {
      id: 'twoChildSeperateClass',
      case: 'best',
      classPerWeek: 3,
      priceAmount: 270,
      perClassCost: 11.25,
    },

    {
      id: 'twoChildSeperateClass',
      case: 'optimal',
      classPerWeek: 3,
      priceAmount: 240,
      perClassCost: 10,
    },
  ];
}
