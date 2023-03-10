const productServices = require("../../services/productsServices");
const productController = require('../../controllers/productsController')

describe('Product Controller', () => {
    describe('POST /addProduct', () => {
        it('should return 200 if product is added', async () => {
            const mockResult = { name: 'test',price:123,description:'test'};
            jest.spyOn(productServices,'addProduct').mockResolvedValue(mockResult);
            const mockReq = {}
            const mockRes = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            await productController.addProduct(mockReq, mockRes);
            expect(mockRes.status).toBeCalledWith(200);
            expect(mockRes.json).toBeCalledWith(mockResult);
        });

        it('should return 400 if product not added', async () => {
            const mockResult = {message: 'Product not added'};
            jest.spyOn(productServices,'addProduct').mockRejectedValue(mockResult);
            const mockReq = {}
            const mockRes = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            await productController.addProduct(mockReq, mockRes);
            expect(mockRes.status).toBeCalledWith(400);
            expect(mockRes.json).toBeCalledWith(mockResult);
        });
    });
    describe('GET /getProducts', () => {
        it('should return 200 if products are fetched', async () => {
            const mockResult = [{ name: 'test',price:123,description:'test'}];
            jest.spyOn(productServices,'getProducts').mockResolvedValue(mockResult);
            const mockReq = {}
            const mockRes = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            await productController.getProducts(mockReq, mockRes);
            expect(mockRes.status).toBeCalledWith(200);
            expect(mockRes.json).toBeCalledWith(mockResult);
        });

        it('should return 400 if products not fetched', async () => {
            const mockResult = {message: 'Products not fetched'};
            jest.spyOn(productServices,'getProducts').mockRejectedValue(mockResult);
            const mockReq = {}
            const mockRes = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            await productController.getProducts(mockReq, mockRes);
            expect(mockRes.status).toBeCalledWith(400);
            expect(mockRes.json).toBeCalledWith(mockResult);
        });
    });

    describe('POST /addProductToCart', () => {
        it('should return 200 if product is added to cart', async () => {

            const mockResult ={
                "id": 3,
                "name": "shashwathsk",
                "password": "$2b$10$LAHfdls7an7DQWeN3Af7p.vwxmWAesfHJKhGyw0UFOST.Eav.mUOO",
                "isAdmin": true,
                "cart": [
                    5,
                    5,
                    5
                ],
                "createdAt": "2023-03-07T07:37:07.818Z",
                "updatedAt": "2023-03-07T10:10:19.319Z"
            };
            jest.spyOn(productServices,'addProductToCart').mockResolvedValue(mockResult);
            const mockReq = {params:{productId:1}}
            const mockRes = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            await productController.addProductToCart(mockReq, mockRes);
            expect(mockRes.status).toBeCalledWith(200);
            expect(mockRes.json).toBeCalledWith(mockResult);
        });

        it('should return 400 if product not added to cart', async () => {  


            const mockResult = {message: 'Product not added to cart'};
            jest.spyOn(productServices,'addProductToCart').mockRejectedValue(mockResult);
            const mockReq = {params:{productId:1}}
            const mockRes = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            await productController.addProductToCart(mockReq, mockRes);
            expect(mockRes.status).toBeCalledWith(400);
            expect(mockRes.json).toBeCalledWith(mockResult);
        })

    });
})