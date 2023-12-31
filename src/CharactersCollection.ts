import { Sorter } from './Sorter';

export class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  get length() {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    let stringArray = this.data.split('');
    const leftHand = stringArray[leftIndex];
    const rightHand = stringArray[rightIndex];
    stringArray[leftIndex] = rightHand;
    stringArray[rightIndex] = leftHand;
    this.data = stringArray.join('');
  }
}
