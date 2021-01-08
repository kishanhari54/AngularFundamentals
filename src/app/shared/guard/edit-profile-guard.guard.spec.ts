import { TestBed, async, inject } from '@angular/core/testing';

import { EditProfileGuardGuard } from './edit-profile-guard.guard';

describe('EditProfileGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditProfileGuardGuard]
    });
  });

  it('should ...', inject([EditProfileGuardGuard], (guard: EditProfileGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
