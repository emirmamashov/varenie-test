
// core
import { Injectable } from '@angular/core';

// models
import { Result } from '../../models/result';

// services
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()
export class MyLocalStorageService {

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  get(name: string): any {
    return this.localStorageService.get(name);
  }

  set(name: string, value: any): any {
    if (this.localStorageService.get(name)) {
      this.localStorageService.set(name, value);
    } else {
      this.localStorageService.add(name, value);
    }
  }

  setFavorite(repositoryId: number): Result {
    let repositoryIds: any = this.getFavoriteRepositories() || [];
    let findRepositoryId = repositoryIds.filter(x => x === repositoryId)[0];
    if (findRepositoryId) {
      return { success: false, msg: 'Уже добавлена!' };
    }
    repositoryIds.push(repositoryId);
    this.localStorageService.set('repositoryIds', repositoryIds);
    return { success: true, msg: 'Успешно добавлено!' };
  }

  getFavoriteRepositories() {
    return this.localStorageService.get('repositoryIds');
  }

  removeInFavorite(id: number): Result {
    let repositoryIds: any = this.getFavoriteRepositories() || [];
    let findRepositoryId = repositoryIds.filter(x => x === id)[0];
    if (!findRepositoryId) {
      return { success: false, msg: 'Не найдено!' };
    }
    repositoryIds = repositoryIds.filter(x => x !== findRepositoryId);
    this.localStorageService.set('repositoryIds', repositoryIds);
    return { success: true, msg: 'Успешно удалена!' };
  }

  clearStorage() {
    this.localStorageService.clearAll();
  }
}
