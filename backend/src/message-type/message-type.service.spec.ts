import { Test, TestingModule } from '@nestjs/testing';
import { MessageTypeService } from './message-type.service';

describe('MessageTypeService', () => {
  let service: MessageTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MessageTypeService],
    }).compile();

    service = module.get<MessageTypeService>(MessageTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
