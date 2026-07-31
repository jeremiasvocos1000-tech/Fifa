import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { PlayersModule } from './players/players.module';
import { AuthModule } from './players/aurh/auth.module';

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
    AuthModule,
  ],
  controllers: [AppController],
})
export class AppModule {}