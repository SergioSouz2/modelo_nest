import { Module } from '@nestjs/common';
import { MembersController } from './members.controller';
import { PrismaService } from 'src/database/prisma.service';
import { RocketMembersRepository } from 'src/repositories/rocket-members-repository';
import { PrismaRocketMembersRepository } from 'src/repositories/prisma/prisma-rocket-members-repository';

@Module({
  imports: [],
  controllers: [MembersController],
  providers: [
    PrismaService,
    {
      provide: RocketMembersRepository,
      useClass: PrismaRocketMembersRepository,
    },
  ],
})
export class MembersModule {}
