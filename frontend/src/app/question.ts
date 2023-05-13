export type Question = {
  id: number;
  text: string;
  answers: {
    text: string;
    personalitySign: string;
  }[]
}
