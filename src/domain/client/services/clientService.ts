import { Client } from "../models/clientModel";

export class ClientService {
  async createClient(name: string) {
    const newClient = await Client.create(name);

    return newClient;
  }

  async allClient() {
    const clients = await Client.findAll({
      where: {
        status: true,
      },
    });

    return clients;
  }

  async clientID(id: string) {
    const checkClient = await Client.findByPk(id);

    return checkClient;
  }

  async disableClient(id: string) {
    const disable = await Client.update(
      {
        status: 0,
      },
      {
        where: {
          id,
        },
      }
    );

    return disable;
  }
}
