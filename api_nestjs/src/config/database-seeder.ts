/* eslint-disable @typescript-eslint/no-unused-vars */
import { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { Template } from 'template/entities/template.entity';

export class DatabaseSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    // will get persisted automatically

    // PLANT
    // PlantType
    const plantT1 = em.create(Template, {
      name: 'Template 1',
      created_at: new Date(),
      updated_at: new Date(),
    });
  }
}
