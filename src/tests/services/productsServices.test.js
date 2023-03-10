const productServices = require("../../services/productsServices");
const { Products,Users } = require("../../../database/models");

describe("Product Services", () => {
    describe("POST /addProduct", () => {
        it("should add a product", async () => {
            const mockResult = {
                name: "test",
                price: "123456",
                description: "test",
            };
            jest.spyOn(Products, "create").mockResolvedValue(mockResult);
            const result = await productServices.addProduct(mockResult);
            expect(result).toEqual(mockResult);
        });
    })
    describe("GET /getProducts", () => {
        it("should get all products", async () => {
            const mockResult = {
                name: "test",
                price: "123456",
                description: "test",
            };
            jest.spyOn(Products, "findAll").mockResolvedValue(mockResult);
            const result = await productServices.getProducts(mockResult);
            expect(result).toEqual(mockResult);
        });
    })
    describe("POST /addProductToCart", () => {
        it("should add a product to cart", async () => {

            const mockResult = {
                dataValues: {
                    userId: "1",
                    productId: "2",
                },
                cart: ["1", "2"],
                save: jest.fn()
            };
            
            jest.spyOn(Products, "findOne").mockResolvedValue(mockResult);
            jest.spyOn(Users, "findOne").mockResolvedValue(mockResult);
            jest.spyOn(Users, "update").mockResolvedValue(mockResult);
            const result = await productServices.addProductToCart(mockResult);
            expect(result).toEqual(mockResult);
        })

    })

})