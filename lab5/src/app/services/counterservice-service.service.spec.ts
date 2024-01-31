import { TestBed } from '@angular/core/testing';

import { CounterserviceServiceService } from './counterservice-service.service';

describe('CounterserviceServiceService', () => {
  let service: CounterserviceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterserviceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
