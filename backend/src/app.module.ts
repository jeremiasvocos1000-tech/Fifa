import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { PlayersModule } from './players/players.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'fifa_db',
      charset: 'utf8mb4',
      autoLoadEntities: true,
      synchronize: false,
    }),
    PlayersModule,
  ],
  controllers: [AppController],
})
export class AppModule {}