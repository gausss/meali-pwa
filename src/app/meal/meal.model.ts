export interface Meal {
  id: number;
  name: string;
  ingredients: Ingredient[];
  description: string;
}

export interface Ingredient {
  amount: number;
  unit: Unit;
  name: string;
}

export type Unit = 'g' | 'ml' | 'x';
