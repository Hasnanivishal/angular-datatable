import { TestBed } from '@angular/core/testing';

import { AngularDataTableService } from './angular-data-table.service';

describe('AngularDataTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularDataTableService = TestBed.get(AngularDataTableService);
    expect(service).toBeTruthy();
  });
});
