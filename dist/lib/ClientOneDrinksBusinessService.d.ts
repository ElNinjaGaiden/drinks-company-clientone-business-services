import { Drink } from 'drinks-company-models-contracts';
import { DrinksBusinessService } from 'drinks-company-business-services';
export default class ClientOneDrinksBusinessService extends DrinksBusinessService {
    crazyFunction(): Promise<Drink[]>;
}
