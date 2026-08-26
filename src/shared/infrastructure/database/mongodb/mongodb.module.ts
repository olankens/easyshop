import { Global, Module } from '@nestjs/common';
import { MongoProvider } from './mongodb.provider';

@Global()
@Module({
  providers: [MongoProvider],
  exports: [MongoProvider],
})
export class MongoModule {}
