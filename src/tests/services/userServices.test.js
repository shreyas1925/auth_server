const userServices = require("../../services/userServices");
const { Users } = require("../../../auth_db/models");

describe("User Services", () => {
  describe("POST /register", () => {
    it("should register a user", async () => {
      const mockResult = {
        name: "test",
        password: "123456",
      };
      jest.spyOn(Users, "create").mockResolvedValue(mockResult);
      const result = await userServices.register(mockResult);
      expect(result).toEqual(mockResult);
    });

  });

  describe("POST /login", () => {
    it("should login a user", async () => {
      const mockResult = {
        dataValues: {
          id: "1",
        },
        name: "test",
        password: "123456",
      };

      const token =
        "eyJhbGciOiJIUzI1NiJ9.dGVzdA.Z9QppyGaeY_EPcKk_srfzkntr319UZd97HOhhOmjEcc";
      jest.spyOn(Users, "findOne").mockResolvedValue(mockResult);
      const result = await userServices.login(mockResult);
      expect(result).toEqual(token);
    });

    it("should not login a user when password is null", async () => {

      // jest.spyOn(Users, "findOne").mockImplementation(() => {
      //   throw new Error("User not found");
      // });

      // const result = await userServices.login("abc");

      // expect(result).toEqual("User not found");

      jest.spyOn(Users, "findOne").mockResolvedValue(null);
      await expect(userServices.login("shreyas")).rejects.toThrow(Error("User not found"));

    });

    it("should not login a user when password is invalid", async () => {

          jest.spyOn(Users, "findOne").mockResolvedValue({
            dataValues: {
              id: "1",
            },
            name: "test",
            password: "123456",
          });

          const mockResult = {
            dataValues: {
              id: "1",
            },
            name: "test",
            password: "890876",
          }

          await expect(userServices.login(mockResult)).rejects.toThrow(Error("Password is not valid"));

    });
  });
});
  