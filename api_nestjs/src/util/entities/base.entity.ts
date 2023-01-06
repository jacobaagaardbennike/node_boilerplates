import { PrimaryKey, Property } from '@mikro-orm/core';

export abstract class CustomBaseEntity {
  @PrimaryKey()
  public id!: number;

  @Property()
  public created_at: Date = new Date();

  @Property({ onUpdate: () => new Date() })
  public updated_at: Date = new Date();
}
