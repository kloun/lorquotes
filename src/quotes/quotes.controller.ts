import { Controller, Get, Param } from '@nestjs/common';
import { QuotesService } from './quotes.service';
import { Quote } from 'src/schemas/quote.schema';

@Controller('quotes')
export class QuotesController {
    constructor(private readonly quoteService: QuotesService)  {}

    @Get('all')
    public async getAllQuotes(): Promise<Quote[]> {
        return this.quoteService.findAll()
    }
    @Get(':uid')
    public async getQuoteByUid(@Param() params: any): Promise<Quote> {
        return this.quoteService.findQuoteByUid(params.uid)
    } 
    @Get('user/:user') 
    public async getQuotesByUser(@Param() params: any): Promise<Quote[]> {
        return this.quoteService.findQuotesByUser(params.user)
    }
}