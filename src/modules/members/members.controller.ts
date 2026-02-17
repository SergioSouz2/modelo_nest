import { Controller, Post, Body } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Controller('members')
export class MambersController {
  constructor(private prisma: PrismaService) {}

  @Post()
  async create(@Body() body: { name: string; function: string }) {
    const member = await this.prisma.rocketTeamMember.create({
      data: {
        name: body.name,
        function: body.function,
      },
    });

    return member;
  }
}
