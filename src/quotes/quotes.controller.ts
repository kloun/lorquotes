import { Controller, Get, Param } from '@nestjs/common';
import { QuotesService } from './quotes.service';
import { Quote } from 'src/schemas/quote.schema';
import { StatsDto } from 'src/dto/StatsDto';
import { retryWhen } from 'rxjs';

@Controller('quotes')
export class QuotesController {
    constructor(private readonly quoteService: QuotesService)  {}

    @Get('all')
    public async getAllQuotes(): Promise<Quote[]> {
        return this.quoteService.findAll()
    }

    @Get('id/:uid')
    public async getQuoteByUid(@Param() params: any): Promise<Quote> {
        return this.quoteService.findQuoteByUid(params.uid)
    } 

    @Get('user/:user') 
    public async getQuotesByUser(@Param() params: any): Promise<Quote[]> {
        return this.quoteService.findQuotesByUser(params.user)
    }

    @Get('stats')
    public async getStats(): Promise<StatsDto> {
        return new StatsDto(await this.quoteService.countQuotes(),  await this.quoteService.calculateCountPages())
    }
    @Get('pages/:page')
    public async getQuotesPerPage(@Param() params: any): Promise<Quote[]>{
        try {
            let n = parseInt(params.page)
            return this.quoteService.findQuotesPerPage(n)
        } catch (err) {
            return this.quoteService.findQuotesPerPage(1)
        }
}
}