import {
  Injectable,
  WritableSignal,
  signal,
  inject,
  Signal,
  computed,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  private http = inject(HttpClient);

  private userCache = new Map<number, IUser>();
  private readonly localKey = 'userCache';

  private selectedUserInternal: WritableSignal<IUser | null> = signal(null);
  readonly selectedUser: Signal<IUser | null> = computed(() =>
    this.selectedUserInternal()
  );

  constructor() {
    this.restoreCache();
  }

  private restoreCache(): void {
    const raw = localStorage.getItem(this.localKey);
    if (!raw) return;

    const obj = JSON.parse(raw) as Record<string, IUser>;
    Object.entries(obj).forEach(([key, user]) =>
      this.userCache.set(+key, user)
    );
  }

  private persistCache(): void {
    const obj: Record<string, IUser> = {};
    this.userCache.forEach((user, id) => {
      obj[id] = user;
    });
    localStorage.setItem(this.localKey, JSON.stringify(obj));
  }

  loadUser(userId: number): void {
    if (this.userCache.has(userId)) {
      this.selectedUserInternal.set(this.userCache.get(userId)!);
      return;
    }

    this.http.get<IUser>(`/users/${userId}`).subscribe((user) => {
      this.userCache.set(userId, user);
      this.persistCache();
      this.selectedUserInternal.set(user);
    });
  }
}
