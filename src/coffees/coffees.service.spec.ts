import { Test, TestingModule } from '@nestjs/testing';
import { coffeesService } from './coffees.service';

describe('coffeesService', () => {
  let service: coffeesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [coffeesService],
    }).compile();

    service = module.get<coffeesService>(coffeesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
