import { Test, TestingModule } from '@nestjs/testing';
import { AssignUsersOnMessageResolver } from './assign-users-on-message.resolver';
import { AssignUsersOnMessageService } from './assign-users-on-message.service';

describe('AssignUsersOnMessageResolver', () => {
  let resolver: AssignUsersOnMessageResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssignUsersOnMessageResolver, AssignUsersOnMessageService],
    }).compile();

    resolver = module.get<AssignUsersOnMessageResolver>(AssignUsersOnMessageResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
