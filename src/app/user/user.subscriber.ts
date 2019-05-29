import { EventSubscriber, EntitySubscriberInterface, InsertEvent, UpdateEvent } from "typeorm";
import { User } from "./user.entity";
import * as bcrypt from 'bcrypt';

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface<User>{
    listenTo() {
        return User;
    }

    async beforeUpdate(event: UpdateEvent<User>) {
        if (event.updatedColumns.includes(event.metadata.findColumnWithPropertyName('password'))) {
            event.entity.password = await bcrypt.hash(event.entity.password, 12)
        }
    }

    async beforeInsert(event: InsertEvent<User>) {
        event.entity.password = await bcrypt.hash(event.entity.password, 12);
    }
}