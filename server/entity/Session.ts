import type { ISession } from 'connect-typeorm';
import { Column, Entity, Index, PrimaryColumn, DeleteDateColumn } from 'typeorm';

@Entity()
export class Session implements ISession {
  @Index()
  @Column('bigint')
  public expiredAt = Date.now();

  @PrimaryColumn('varchar', { length: 255 })
  public id = '';

  @Column('text')
  public json = '';

  @DeleteDateColumn()
  public deletedAt?: Date; // Enables soft delete functionality
}
