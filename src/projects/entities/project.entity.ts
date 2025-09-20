import crypto from "crypto";
import { Column, Entity, PrimaryColumn } from "typeorm";

export enum ProjectStatus {
    Pending = 'pending,',
    Active = 'active',
    Completed = 'completed',
    Cancelled = 'cancelled'
}

@Entity()
export class Project {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column({ nullable: true, type: 'datetime'})
    startedAt: Date | null;

    @Column({
    type: 'enum',
    enum: ProjectStatus,
    default: ProjectStatus.Pending,
  })
    status: ProjectStatus;

    @Column({ type: 'datetime'})
    createdAt: Date;

    @Column()
    updatedAt: Date;

    constructor (props: {
        name: string;
        startedAt?: Date | null;
        finishedAt?: Date | null;
    }, id?: string) {
        Object.assign(this, props);
        this.id = id ?? crypto.randomUUID();
    }

}
