import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TopPageModule } from './top-page/top-page.module';
import { ProductModule } from './product/product.module';
import { ReviewModule } from './review/review.module';
import { ScheduleModule } from '@nestjs/schedule';


@Module({
    imports: [
        ScheduleModule.forRoot(),
        AuthModule,
        TopPageModule,
        ProductModule,
        ReviewModule,
    ]
})
export class AppModule { }