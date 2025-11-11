import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { memberResolver } from './member-resolver';
import { Member } from '../../types/member';

describe('memberResolver', () => {
  const executeResolver: ResolveFn<Member> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => memberResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});