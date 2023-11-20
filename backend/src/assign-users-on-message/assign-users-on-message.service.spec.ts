import { Test, TestingModule } from '@nestjs/testing';
import { AssignUsersOnMessageService } from './assign-users-on-message.service';

describe('AssignUsersOnMessageService', () => {
  let service: AssignUsersOnMessageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssignUsersOnMessageService],
    }).compile();

    service = module.get<AssignUsersOnMessageService>(AssignUsersOnMessageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
