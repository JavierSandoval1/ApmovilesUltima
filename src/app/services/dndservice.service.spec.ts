import { TestBed } from '@angular/core/testing';

import { DndserviceService } from './dndservice.service';

describe('DndserviceService', () => {
  let service: DndserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DndserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
