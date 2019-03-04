
// core
import { Component, OnInit, OnDestroy } from '@angular/core';

// config
import { ApiConfig, NotifyConfig } from '../../config';

// models
import { Repository } from '../../models/repository';
import { Result } from '../../models/result';

// services
import { UnsubscribeService } from '../../services/unsubscribe/unsubscribe.service';
import { MasterQueryService } from '../../services/master-query/master-query.service';
import { NotifyService } from '../../services/notify/notify.service';
import { MyLocalStorageService } from '../../services/local-storage/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  private subscribes = new Array<any>();
  private repositories = new Array<Repository>();
  public filteredRepositories = new Array<Repository>();
  public programmingLangs = new Array<string>();

  constructor(
    private unsubscribeService: UnsubscribeService,
    private masterQueryService: MasterQueryService,
    private notifyService: NotifyService,
    private localStorageService: MyLocalStorageService
  ) { }

  ngOnInit() {
  }

  public searchRepository(text: string) {
    if (!text) return;
    this.subscribes.push(
      this.masterQueryService.get(ApiConfig.repository.search.url + '?q=' + text)
      .subscribe(
        (res: any) => {
          if (!res || res.total_count < 1) {
            return this.notifyService.showMessage('Не найдено!', NotifyConfig.msgTypes.warning.styleName);
          }
          this.filteredRepositories = res.items;
          this.repositories = res.items;
          this.setProgrammingLanguages(this.repositories);
        },
        (err) => {
          console.log(err);
          this.notifyService.showMessage('Что то пошло не так!', NotifyConfig.msgTypes.danger.styleName);
        }
      )
    );
  }

  private setProgrammingLanguages(repositories: Array<Repository>) {
    repositories.forEach((repository) => {
      let findLangs = this.programmingLangs.filter(x => x === repository.language);
      if (findLangs.length === 0 && repository.language) {
        this.programmingLangs.push(repository.language);
      }
    });
  }

  public filterByLanguage(language: any) {
    if (!language) {
      this.filteredRepositories = this.repositories;
      return;
    }
    this.filteredRepositories = this.repositories.filter(x => x.language === language);
  }

  public toFavorite(repositoryId: number) {
    let res: Result = this.localStorageService.setFavorite(repositoryId);
    if (!res.success) {
      this.notifyService.showMessage(res.msg, NotifyConfig.msgTypes.warning.styleName);
      return;
    }
    this.notifyService.showMessage(res.msg, NotifyConfig.msgTypes.success.styleName);
  }

  ngOnDestroy() {
    this.unsubscribeService.unsubscribings(this.subscribes);
  }

}
