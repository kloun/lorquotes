import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";
import { User } from "./user.schema";

@Schema()
export class Quote {    
    @Prop({required: true})
    text: string
    
    @Prop()
    user: string

    @Prop()
    date: string

    @Prop()
    url: string
    
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'user'})
    posted_by: User
}

export type QuoteDocument = mongoose.HydratedDocument<Quote>;
export const QuoteSchema = SchemaFactory.createForClass(Quote);