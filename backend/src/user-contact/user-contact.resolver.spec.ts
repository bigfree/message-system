import { Test, TestingModule } from '@nestjs/testing';
import { UserContactResolver } from './user-contact.resolver';
import { UserContactService } from './user-contact.service';

describe('UserContactResolver', () => {
  let resolver: UserContactResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserContactResolver, UserContactService],
    }).compile();

    resolver = module.get<UserContactResolver>(UserContactResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
