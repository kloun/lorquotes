import { Module } from '@nestjs/common';
import { QuotesService } from './quotes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Quote, QuoteSchema } from 'src/schemas/quote.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: Quote.name, schema: QuoteSchema}])],
  providers: [QuotesService]
})
export class QuotesModule {}
