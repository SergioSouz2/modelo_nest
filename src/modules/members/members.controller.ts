import { Controller, Post, Body } from '@nestjs/common';
import { CreateTeamMemberBody } from 'src/dtos/create-team-member-body';
import { RocketMembersRepository } from 'src/repositories/rocket-members-repository';

@Controller('members')
export class MembersController {
  constructor(private rocketMembersRepository: RocketMembersRepository) {}

  @Post()
  async create(@Body() body: CreateTeamMemberBody) {
    const { name, function: memberFunction } = body;
    await this.rocketMembersRepository.create(name, memberFunction);
  }
}
