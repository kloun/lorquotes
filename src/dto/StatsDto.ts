export class StatsDto {
    constructor(quotesCount: number, pagesCount: number){
        this.pagesCount=pagesCount
        this.quotesCount=quotesCount
    }
    quotesCount: number
    pagesCount: number 
}