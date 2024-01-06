import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateQuoteDto } from 'src/dto/CreateQuote.dto';
import { Quote } from 'src/schemas/quote.schema';

@Injectable()
export class QuotesService {
    constructor(@InjectModel(Quote.name) private quoteModel: Model<Quote>) {}

    async findQuoteByUid(uid: string): Promise<Quote> {
        return this.quoteModel.findById(uid)        
    }

    async findAll(): Promise<Quote[]> {
        return this.quoteModel.find().exec()
    }

    async findQuotesByUser(user: string): Promise<Quote[]> {
        return this.quoteModel.find({user: user})
    }
    
    async addQuote(createQuoteDto: CreateQuoteDto): Promise<Quote> {
        const quote = new this.quoteModel(createQuoteDto)
        return quote.save()
    }
    
}