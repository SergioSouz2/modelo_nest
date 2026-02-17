import { Controller, Post, Body } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateTeamMemberBody } from 'src/dtos/create-team-member-body';

@Controller('members')
export class MembersController {
  constructor(private prisma: PrismaService) {}

  @Post()
  async create(@Body() body: CreateTeamMemberBody) {
    const member = await this.prisma.rocketTeamMember.create({
      data: {
        name: body.name,
        function: body.function,
      },
    });

    return member;
  }
}
