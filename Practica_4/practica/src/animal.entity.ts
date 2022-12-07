import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class AnimalEntity {
   @ObjectIdColumn()
   id: string;

   @Column()
   name: string;

   @Column()
   especie: string;

   @Column()
   age: number;

   @Column()
   descripcion: string;
}