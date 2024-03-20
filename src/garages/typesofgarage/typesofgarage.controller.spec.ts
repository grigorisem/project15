import { Test, TestingModule } from '@nestjs/testing';
import { TypesofgarageController } from './typesofgarage.controller';

describe('TypesofgarageController', () => {
  let controller: TypesofgarageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypesofgarageController],
    }).compile();

    controller = module.get<TypesofgarageController>(TypesofgarageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
