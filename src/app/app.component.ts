import {Component, OnInit} from '@angular/core'
declare let $: any;

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css']
})
export class AppComponent implements OnInit {

  isHiddenSubMenu = [false, false, false, false, false, false];

  constructor() {};

  private hideElements() {
    this.isHiddenSubMenu = this.isHiddenSubMenu.map(v => v = false);
  }

  messages = [
    {title: 'Element blocked'},
    {title: 'Pressure warning'},
    {title: 'Message from admin'},
    {title: 'Monthly review'}
  ];

  isMenuHidden: boolean = false;
  isMenuShrunken: boolean = false;

  private checkScreenWidth() {
    if (window.innerWidth < 1200 && window.innerWidth > 499) {
      this.isMenuShrunken = true;
      this.isMenuHidden = false;
      this.hideElements();
    } else if (window.innerWidth < 500) {
      this.isMenuShrunken = false;
      this.isMenuHidden = true;
      this.hideElements();
    } else {
      this.isMenuHidden = false;
      this.isMenuShrunken = false;
    }
  }

  private toggleMenu() {
    if (window.innerWidth < 1200 && window.innerWidth > 499) {
      this.isMenuHidden = false;
      this.isMenuShrunken = !this.isMenuShrunken;
    } else if (window.innerWidth < 500) {
      this.isMenuHidden = !this.isMenuHidden;
    } else {
      this.isMenuShrunken = !this.isMenuShrunken;
    }

  }

  ngOnInit() {
    this.checkScreenWidth();
    $(".subMenuItemContainer").find('.subMenuLink').click(function(){
      $('.subMenuLink').removeClass('selectedSection');
      $(this).addClass('selectedSection');
    });
  }

}

export class AppModule {}