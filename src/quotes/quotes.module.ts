import { Module } from '@nestjs/common';
import { QuotesService } from './quotes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Quote, QuoteSchema } from 'src/schemas/quote.schema';
import { QuotesController } from './quotes.controller';

@Module({
  imports: [MongooseModule.forFeature([{name: Quote.name, schema: QuoteSchema}])],
  providers: [QuotesService],
  controllers: [QuotesController]
})
export class QuotesModule {}
