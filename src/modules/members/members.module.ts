import { Module } from '@nestjs/common';
import { MambersController } from './members.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  imports: [],
  controllers: [MambersController],
  providers: [PrismaService],
})
export class MambersModule {}
