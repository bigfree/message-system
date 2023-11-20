import { Test, TestingModule } from '@nestjs/testing';
import { QueueResolver } from './queue.resolver';
import { QueueService } from './queue.service';

describe('QueueResolver', () => {
  let resolver: QueueResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QueueResolver, QueueService],
    }).compile();

    resolver = module.get<QueueResolver>(QueueResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
