import { Entity, Property } from '@mikro-orm/core';
import { CustomBaseEntity } from 'util/entities/base.entity';

@Entity()
export class Template extends CustomBaseEntity {
  @Property()
  public name!: string;
}
