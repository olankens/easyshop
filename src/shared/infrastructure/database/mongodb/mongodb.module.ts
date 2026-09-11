import { Global, Module } from '@nestjs/common';
import { MongoProvider } from './mongodb.provider.js';

@Global()
@Module({
  providers: [MongoProvider],
  exports: [MongoProvider],
})
export class MongoModule {}
