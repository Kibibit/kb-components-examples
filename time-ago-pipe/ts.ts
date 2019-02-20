export class AppComponent {
  oldDate1 = moment().subtract(moment.duration(3, 'minutes'));
  oldDate2 = moment().subtract(moment.duration(10, 'hours'));
  oldDate3 = moment().subtract(moment.duration(6, 'days'));
}
