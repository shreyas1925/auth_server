const userServices = require('../../services/userServices');
const userController = require('../../controllers/userController');

describe('User Controller', () => {
    describe('POST /register', () => {
        it('should return 200 if user is registered', async () => {
            const mockResult = { name: 'test',password:'123456'};
            jest.spyOn(userServices,'register').mockResolvedValue(mockResult);
            const mockReq = {}
            const mockRes = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            await userController.register(mockReq, mockRes);
            expect(mockRes.status).toBeCalledWith(200);
            expect(mockRes.json).toBeCalledWith(mockResult);
        });

        it('should return 400 if user not registered', async () => {
            const mockResult = {message: 'User not registered'};
            jest.spyOn(userServices,'register').mockRejectedValue(mockResult);
            const mockReq = {}
            const mockRes = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            await userController.register(mockReq, mockRes);
            expect(mockRes.status).toBeCalledWith(400);
            expect(mockRes.json).toBeCalledWith(mockResult);
        });
    });
});

describe('User Controller', () => {
    describe('POST /login', () => {
        it('should return 200 if user has logged in', async () => {
            const mockResult = { name: 'test',password:'123456'};
            jest.spyOn(userServices,'login').mockResolvedValue(mockResult);
            const mockReq = {}
            const mockRes = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            await userController.login(mockReq, mockRes);
            expect(mockRes.status).toBeCalledWith(200);
            expect(mockRes.json).toBeCalledWith(mockResult);
        });

        it('should return 400 if user not registered', async () => {
            const mockResult = {message: 'User not logged in'};
            jest.spyOn(userServices,'login').mockRejectedValue(mockResult);
            const mockReq = {}
            const mockRes = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            await userController.login(mockReq, mockRes);
            expect(mockRes.status).toBeCalledWith(400);
            expect(mockRes.json).toBeCalledWith(mockResult);
        });
    });
});

describe('User Controller', () => {
    describe('GET /cartProducts/:userId', () => {
        it('should return 200 when user has cart products', async () => {
            const mockResult = ['product1','product2']
            jest.spyOn(userServices,'getCartProducts').mockResolvedValue(mockResult);
            const mockReq = {userId: '2'}
            const mockRes = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            await userController.getCartProducts(mockReq, mockRes);
            expect(mockRes.status).toBeCalledWith(200);
            expect(mockRes.json).toBeCalledWith(mockResult);

        });

        it('should return 400 when user has no cart products', async () => {
            const mockResult = {message: 'No cart products'}
            jest.spyOn(userServices,'getCartProducts').mockRejectedValue(mockResult);
            const mockReq = {userId: '2'}
            const mockRes = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            await userController.getCartProducts(mockReq, mockRes);
            expect(mockRes.status).toBeCalledWith(400);
            expect(mockRes.json).toBeCalledWith(mockResult);
        });
        
    });
});

