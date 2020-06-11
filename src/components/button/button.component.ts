import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, Input } from '@angular/core';

export type AmButtonType = 'primary' | 'success' | 'info' | 'warning' | 'danger' | null;
export type AmButtonShape = 'circle' | 'round' | null;
export type AmButtonSize = 'large' | 'medium' | 'small';

@Component({
  selector: 'button[amButton],a[amButton]',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.am-btn]': 'true',
    '[class.am-btn-primary]': `amType === 'primary'`,
    '[class.am-btn-success]': `amType === 'success'`,
    '[class.am-btn-info]': `amType === 'info'`,
    '[class.am-btn-warning]': `amType === 'warning'`,
    '[class.am-btn-danger]': `amType === 'danger'`,
    '[class.am-btn-large]': `amSize==='large'`,
    '[class.am-btn-medium]': `amSize==='medium'`,
    '[class.am-btn-small]': `amSize==='small'`
  }
})
export class AmButtonComponent implements OnInit {
  constructor() {}

  @Input()
  amType: AmButtonType = null;
  @Input()
  amSize: AmButtonSize = 'medium';

  ngOnInit(): void {}
}
