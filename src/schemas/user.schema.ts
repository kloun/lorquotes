import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

@Schema()
export class User {    
    @Prop({required: true}) 
    nick: string
    
    @Prop()
    email: string

    @Prop({required: true})
    register_date: string

    @Prop({required: true})
    password_hash: string
    
    @Prop({required: true})
    is_admin:  boolean 
}

export type UserDocument = HydratedDocument<User>;
export const UserSchema = SchemaFactory.createForClass(User);