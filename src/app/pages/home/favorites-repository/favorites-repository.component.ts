
// core
import { Component, OnInit, OnDestroy } from '@angular/core';

// config
import { ApiConfig, NotifyConfig } from './../../../config';

// models
import { Repository } from './../../../models/repository';

// services
import { UnsubscribeService } from '../../../services/unsubscribe/unsubscribe.service';
import { NotifyService } from '../../../services/notify/notify.service';
import { MyLocalStorageService } from '../../../services/local-storage/local-storage.service';
import { MasterQueryService } from 'src/app/services/master-query/master-query.service';
import { Result } from 'src/app/models/result';

@Component({
  selector: 'app-favorites-repository',
  templateUrl: './favorites-repository.component.html',
  styleUrls: ['./favorites-repository.component.scss']
})
export class FavoritesRepositoryComponent implements OnInit, OnDestroy{

  private subscribes = new Array<any>();
  public repositories = new Array<Repository>();

  constructor(
    private unsubscribeService: UnsubscribeService,
    private notifyService: NotifyService,
    private localStorageService: MyLocalStorageService,
    private masterQueryService: MasterQueryService
  ) { }

  ngOnInit() {
    this.getRepositories();
  }

  private getRepositories() {
    let repositorIds: any = this.localStorageService.getFavoriteRepositories();
    if (repositorIds.length < 1) return;
    repositorIds.forEach((id) => {
      this.getRepositoryById(id);
    });
  }

  private getRepositoryById(id: number) {
    this.subscribes.push(
      this.masterQueryService.get(ApiConfig.repository.getById.url + id).subscribe(
        (res) => {
          if (res) this.repositories.push(res);
        },
        (err) => {
          console.log(err);
        }
      )
    );
  }

  public removeInFavorite(id: number) {
    let res: Result = this.localStorageService.removeInFavorite(id);
    if (!res.success) {
      this.notifyService.showMessage(res.msg, NotifyConfig.msgTypes.warning.styleName);
      return;
    }
    this.notifyService.showMessage(res.msg, NotifyConfig.msgTypes.success.styleName);
    this.repositories = this.repositories.filter(x => x.id !== id);
  }

  ngOnDestroy() {
    this.unsubscribeService.unsubscribings(this.subscribes);
  }
}
