import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateQuoteDto } from 'src/dto/CreateQuote.dto';
import { Quote } from 'src/schemas/quote.schema';

@Injectable()
export class QuotesService {
    constructor(@InjectModel(Quote.name) private quoteModel: Model<Quote>) {}
    public QUOTES_PER_PAGE: number = 25

    async findQuoteByUid(uid: string): Promise<Quote> {
        return this.quoteModel.findById(uid)        
    }

    async findAll(): Promise<Quote[]> {
        return this.quoteModel.find().exec()
    }

    async countQuotes(): Promise<number> {
        return this.quoteModel.countDocuments()
    }

    async calculateCountPages() {
        return Math.floor((await this.countQuotes())/this.QUOTES_PER_PAGE)
    }

    async findQuotesPerPage(page: number): Promise<Quote[]> {
        if (page <= 1) return  this.quoteModel.find().limit(this.QUOTES_PER_PAGE)
        else if (page <= await this.calculateCountPages())
            return this.quoteModel.find().skip(page*this.QUOTES_PER_PAGE).limit(this.QUOTES_PER_PAGE)
        else return null
    }

    async findQuotesByUser(user: string): Promise<Quote[]> {
        return this.quoteModel.find({user: user})
    }
    
    async addQuote(createQuoteDto: CreateQuoteDto): Promise<Quote> {
        const quote = new this.quoteModel(createQuoteDto)
        return quote.save()
    }
    
}