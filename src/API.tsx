export type Question = {
    category : string;
    correct_answer :string;
    difficulty : string;
    incorrect_answer : string[];
    question: string;
    type: string;
}

export type QuestionState = Question & {answer : string[]}

// export enum Difficulty{} num은 typescript에만 있는 거라 js로 변경했을때 불필요한 코드가 발생함 -> 잘 사용하지 않음
// Union Types를 사용
const Difficulty = {
    EASY: 'easy',
    MEDIUM: 'medium',
    HARD: 'hard'
} as const;

type Difficulty = typeof Difficulty[keyof typeof Difficulty]; 
export const fetchQuizQuestions = async(amount:number, difficulty:Difficulty) => {
    // 여기에는 quiz 정보를 요청할 api(opentdb)
}