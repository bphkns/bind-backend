import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';


describe('UserController', () => {
    let userController: UserController;
    let userService: UserService;

    beforeEach(() => {
        userService = new UserService(new UserRepository());
        userController = new UserController(userService);
    });

    describe('find', () => {
        it('should return user', async () => {
            let result : Promise<string>;
            jest.spyOn(userService, 'find').mockImplementation(() => result);

            expect(await userController.find()).toBe(result);
        });
    })
})