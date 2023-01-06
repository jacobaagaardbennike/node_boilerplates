import { Property } from '@mikro-orm/core';
import { CustomBaseEntity } from 'util/entities/base.entity';

export abstract class BaseOption extends CustomBaseEntity {
  @Property()
  public description!: string;
}
