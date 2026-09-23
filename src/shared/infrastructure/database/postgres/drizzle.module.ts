import { Global, Module } from '@nestjs/common';
import { DrizzleProvider } from './drizzle.provider.js';

@Global()
@Module({
  providers: [DrizzleProvider],
  exports: [DrizzleProvider],
})
export class DrizzleModule {}
