import { Test, TestingModule } from '@nestjs/testing';
import { MessageTypeResolver } from './message-type.resolver';
import { MessageTypeService } from './message-type.service';

describe('MessageTypeResolver', () => {
  let resolver: MessageTypeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MessageTypeResolver, MessageTypeService],
    }).compile();

    resolver = module.get<MessageTypeResolver>(MessageTypeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
