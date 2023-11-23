/* eslint-disable prettier/prettier */
import { randomCarAlgorithm } from '../main/random-vehicle-algorithm';
import { randomNumbers } from '../util/random-numbers';

const costumerNames = [
  'Tiago',
  'Jasmine',
  'Leticia',
  'Larissa',
  'Gustavo',
  'Leonardo',
];

for (let i = 0; i < costumerNames.length; i++) {
  const vehicle = randomCarAlgorithm();
  const name = costumerNames[randomNumbers(costumerNames.length)];

  vehicle.pickUp(name);
  vehicle.stop(name);
}
