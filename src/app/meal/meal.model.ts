export interface Meal {
  id: number;
  name: string;
  ingredients?: Ingredient[];
  difficulty: Difficulty;
}

export interface Ingredient {
  amount: number;
  unit: Unit;
  name: string;
}

export type Unit = 'g' | 'ml' | 'x';
export type Difficulty = 'easy' | 'hard';
