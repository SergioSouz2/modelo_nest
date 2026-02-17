/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNotEmpty } from 'class-validator';

export class CreateTeamMamberBody {
  @IsNotEmpty({
    message: 'The member name should not be empty.',
  })
  name: string;

  @IsNotEmpty({
    message: 'The member function should not be empty.',
  })
  function: string;
}
