import { CreateMessageTypeInput } from './create-message-type.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMessageTypeInput extends PartialType(CreateMessageTypeInput) {
  @Field(() => Int)
  id: number;
}
