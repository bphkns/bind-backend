import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilterModule } from './filters/filter.module';
import { InterceptorModule } from './interceptors/interceptor.module';
import { UserModule } from './app/user/user.module';
import { AuthModule } from './app/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    FilterModule,
    InterceptorModule,
    UserModule,
    AuthModule
  ]
})
export class AppModule { }
