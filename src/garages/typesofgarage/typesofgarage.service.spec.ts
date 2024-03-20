import { Test, TestingModule } from '@nestjs/testing';
import { TypesofgarageService } from './typesofgarage.service';

describe('TypesofgarageService', () => {
  let service: TypesofgarageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypesofgarageService],
    }).compile();

    service = module.get<TypesofgarageService>(TypesofgarageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
