import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { QuotesModule } from './quotes/quotes.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/lorquotes'), AuthModule, UsersModule, QuotesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
