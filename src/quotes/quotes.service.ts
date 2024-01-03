import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Quote } from 'src/schemas/quote.schema';

@Injectable()
export class QuotesService {
    constructor(@InjectModel(Quote.name) private quoteModel: Model<Quote>) {}
    async findQuoteByUid(uid: string): Promise<Quote> {
        return await this.quoteModel.findById(uid)        
    }
    async findAll(): Promise<Quote[]> {
        return this.quoteModel.find().exec()
    }

}