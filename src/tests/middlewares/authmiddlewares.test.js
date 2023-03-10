
const { authUser, authAdmin } = require("../../middlewares/authMiddleware");

// describe("Auth middlewares", () => {
//   describe("authUser", () => {
//     it("should return 401 if no token is provided", () => {
//       const req = {};
//       const res = {
//         status: jest.fn().mockReturnThis(),
//         json: jest.fn(),
//       };
//       const next = jest.fn();
//       authUser(req, res, next);
//       expect(res.status).toHaveBeenCalledWith(401);
//       expect(res.json).toHaveBeenCalledWith({ message: "Unauthorized" });
//     });
//     it("should return 403 if token is invalid", () => {
//       const req = {};
//       const res = {
//         status: jest.fn().mockReturnThis(),
//         json: jest.fn(),
//       };
//       const next = jest.fn();
//       authUser(req, res, next);
//       expect(res.status).toHaveBeenCalledWith(403);
//       expect(res.json).toHaveBeenCalledWith({ message: "Forbidden" });
//     });
//     it("should return 401 if token is not in redis", () => {
//       const req = {};
//       const res = {
//         status: jest.fn().mockReturnThis(),
//         json: jest.fn(),
//       };
//       const next = jest.fn();
//       authUser(req, res, next);
//       expect(res.status).toHaveBeenCalledWith(401);
//       expect(res.json).toHaveBeenCalledWith({ message: "Unauthorized" });
//     });
//     it("should return 200 if token is valid", () => {
//       const req = {};
//       const res = {
//         status: jest.fn().mockReturnThis(),
//         json: jest.fn(),
//       };
//       const next = jest.fn();
//       authUser(req, res, next);
//       expect(res.status).toHaveBeenCalledWith(200);
//       expect(res.json).toHaveBeenCalledWith({ message: "Authorized" });
//     });
//   });

//   describe("authAdmin", () => {
//     it("should return 403 if user is not admin", () => {
//       const req = {};
//       const res = {
//         status: jest.fn().mockReturnThis(),
//         json: jest.fn(),
//       };
//       const next = jest.fn();
//       authAdmin(req, res, next);
//       expect(res.status).toHaveBeenCalledWith(403);
//       expect(res.json).toHaveBeenCalledWith({
//         message:
//           "Sorry you dont have access to this route!! Please login as admin",
//       });
//     });
//     it("should return 200 if user is admin", () => {
//       const req = {};
//       const res = {
//         status: jest.fn().mockReturnThis(),
//         json: jest.fn(),
//       };
//       const next = jest.fn();
//       authAdmin(req, res, next);
//       expect(res.status).toHaveBeenCalledWith(200);
//       expect(res.json).toHaveBeenCalledWith({ message: "Authorized" });
//     });
//   });
// });

describe('Auth middlewares', () => {
    describe('authUser', () => {
        it('should return 401 if no token is provided', () => {
        })
    })
})