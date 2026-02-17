import { Module } from '@nestjs/common';
import { MembersController } from './members.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  imports: [],
  controllers: [MembersController],
  providers: [PrismaService],
})
export class MembersModule {}
