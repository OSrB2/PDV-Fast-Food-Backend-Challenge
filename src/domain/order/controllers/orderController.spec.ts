import supertest from "supertest";
import app from "../../../app";

describe("No controller ao executar a função", () => {
  describe("create", () => {
    test("Criando pedido. Em caso de sucesso, deve retornar", async () => {
      const response = await supertest(app).post("/order").send({
        client: "Teste",
        product_id: "757c255d-2ab0-4f99-94fc-f44245125673",
        total: 20.0,
        payment: "cash",
        note: "teste",
      });
      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty("id");
    });
  });

  describe("getall", () => {
    test("Em caso de sucesso, deve retornar", async () => {
      const response = await supertest(app).get("/orders");
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      //expect(typeof response).toBe("object");
    });
  });
});
