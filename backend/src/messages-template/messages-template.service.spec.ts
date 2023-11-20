import { Test, TestingModule } from '@nestjs/testing';
import { MessagesTemplateService } from './messages-template.service';

describe('MessagesTemplateService', () => {
  let service: MessagesTemplateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MessagesTemplateService],
    }).compile();

    service = module.get<MessagesTemplateService>(MessagesTemplateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
