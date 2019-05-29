import { EntitySubscriberInterface, InsertEvent, UpdateEvent } from "typeorm";
import { User } from "./user.entity";
export declare class UserSubscriber implements EntitySubscriberInterface<User> {
    listenTo(): typeof User;
    beforeUpdate(event: UpdateEvent<User>): Promise<void>;
    beforeInsert(event: InsertEvent<User>): Promise<void>;
}
