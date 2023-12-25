import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SignupModule } from './signup/signup.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://AveshKumar:root@cluster0.jbyq6le.mongodb.net/interviewPractic?retryWrites=true&w=majority'), SignupModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
