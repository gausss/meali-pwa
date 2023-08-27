import { MealService } from './meal.service';

describe('MealService', () => {
  let mealService: MealService;
  beforeEach(() => {
    mealService = new MealService();
  });

  it('should have default meals', () => {
    expect(mealService.getAllIds()).toHaveLength(6);
    let meal = mealService.get(2);
    expect(meal?.name).toBe('Farfalle');
    expect(meal?.difficulty).toBe('easy');
  });

  it('should delete by id', () => {
    mealService.delete(2);
    expect(mealService.getAllIds()).toHaveLength(5);
    let meal = mealService.get(2);
    expect(meal).toBeUndefined();
  });

  it('should create with new id', () => {
    mealService.create({
      id: 0,
      name: 'MealNew',
      difficulty: 'hard',
    });
    expect(mealService.getAllIds()).toHaveLength(6);
    let meal = mealService.get(7);
    expect(meal?.name).toBe('MealNew');
    expect(meal?.difficulty).toBe('hard');
  });
});
