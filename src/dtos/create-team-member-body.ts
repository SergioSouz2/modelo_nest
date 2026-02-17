/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNotEmpty, Length } from 'class-validator';

export class CreateTeamMemberBody {
  @Length(5, 100)
  @IsNotEmpty({
    message: 'The member name should not be empty.',
  })
  name: string;

  @IsNotEmpty({
    message: 'The member function should not be empty.',
  })
  function: string;
}
