// ...
import { CreateNotification, NotificationsService } from '@kibibit/kb-components';
import { Chance } from 'chance';

@Component({
  // ...
})
export class AppComponent implements AfterViewInit {
  private chance = new Chance();

  constructor(private notificationsService: NotificationsService) {}

  addNotification(): Promise<any> {
    return this.notificationsService.add(this.createNotification())
      .then(() => this.notificationsService.getAll())
      .then((notifications: Notification[]) => this.notifications = notifications)
      .then(() => this.notifications[0].class = 'added');
  }

  private createNotification(): CreateNotification {
    const type = this.chance.pickone(['created', 'starred']);
    return {
      title: type === 'created' ? 'Folder created successfully' : 'Folder Added to Favorites',
      state: 'success',
      item: { whatever: 'you want!' },
      type: this.chance.pickone(['created', 'starred'])
    };
  }
