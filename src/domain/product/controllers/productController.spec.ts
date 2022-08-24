import supertest from "supertest";
import app from "../../../app";
import uuid from "uuid";

describe("No controller ao executar a função", () => {
  describe("create", () => {
    test("Cadastrando produto. Em caso de sucesso, deve retornar", async () => {
      const response = await supertest(app).post("/products").send({
        id: uuid,
        name: "Teste",
        product_code: 111,
        description: "executando testes",
        price: 10,
      });
      expect(response.status).toBe(201);
    });
  });

  describe("getall", () => {
    test("Em caso de sucesso, deve retornar", async () => {
      const response = await supertest(app).get("/products");
      expect(typeof response).toBe("object");
    });
  });
});
