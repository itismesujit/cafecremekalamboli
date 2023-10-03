import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  subMenu: any = [];
  header: any = '';
  paragraph: any = '';

  oldElem: any = '';
  imgDir: any = '../../assets/'
  data: any = {
    kuka: {
      header: 'KUKA WITH THUNDER',
      paragraph: 'Kuka with a scoop of delicious ice-cream on top!',
      submenu: [
        'Kuka',
        'Kuka with Crush',
        'Kuka with Thunder',
        'White Kuka',
        'Moka Kuka with Crush',
        'Moka Kuka with Thunder',
        'Irish Kuka',
        'Irish Kuka with Crush'
      ]
    },
    kukaExclusive: {
      header: 'BLACK FOREST KUKA',
      paragraph: 'Your favorite cake flavor, now in a Kuka',
      submenu: [
        'Jamaican Kuka',
        'Blackberry Kuka',
        'Bournville Kuka',
        'Black forest Kuka',
        'Caramel Kuka',
        '5 Star Kuka',
        'Dark Secret Kuka',
        'Tropical Fruit Kuka'
      ]
    },
    'cremeShakes and creme mastani': {
      header: 'STRAWBERRY',
      paragraph: 'Tangy & sweet Strawberries added to the thick & creamy shake!',
      submenu: [
        'Vanilla',
        'Strawberry',
        'Pista',
        'Butterscotch',
        'Black Currant',
        'Mango',
        'Dryfruit',
        'Kaju-Badam',
        'Anjeer',
        'Mixfruit'
      ]
    },
    cremeShakes: {
      header: 'MANGO',
      paragraph: 'Freshly made shake with real chunks of Mango!',
      submenu: [
        'Sitaphal',
        'Pineapple',
        'Strawberry',
        'Litchi',
        'Anj r',
        'Chikoo'
      ]
    },
    junket: {
      header: 'SPECIAL CAFÈ CRÈME',
      paragraph: 'Sundae with 5 scoops topped with dry fruits!',
      submenu: [
        'Mix Fruit',
        'Double Fudge',
        'Titanic',
        'Special Café Créme',
        'Choco Crunch'
      ]
    },
    thunders: {
      header: 'DARK SECRET',
      paragraph: 'Icecream with the bitter-sweet taste of real dark chocolate!',
      submenu: [
        'Vanilla',
        'Strawberry',
        'Pista',
        'Mango',
        'Chocochip',
        'Anjeer',
        'Fruit Overlode',
        'Blackforest',
        'Lemolez',
        'Saffron Badam Pista',
        'Cheesy Berry',
        'Dark Secret'
      ]
    },
    chocExclusive: {
      header: 'KUKA ROYALÈ',
      paragraph: 'A true bliss of multi layers of chocolate topped with dry fruits, a cherry & chocolate sticks',
      submenu: [
        'CC Shot',
        'Choco Shake',
        'Chocolate Sandwich'
      ]
    },
    chocoCremes: {
      header: 'CHOCO CREMÈ - B',
      paragraph: 'A thick chocolate creme shake topped with greted chocolate & Crush!',
      submenu: [
        'Dark Secret Choco Créme',
        'Blackforest Choco Créme',
        'Roasted Choco Créme',
        'Snikker Choco Créme',
        'Walnut Choco Créme',
        'Bournville Choco Creme',
        'Kit-Kat Choco Créme',
        'Coconut Choco Créme',
        'Dryfruit Choco Créme',
        'Ferrero Choco Créme',
        'White Choco Creme',
        'Choco Créme-B',
        'Choco Créme-M',
        'Day n Night Choco Créme'
      ]
    },
    snacks: {
      header: 'VEG BURGER',
      paragraph: 'Delightful and delicious veg burger!',
      submenu: [
        'French Fries',
        'Masala Fries',
        'Chilli Garlic Pops',
        'Aloo Tikki',
        'Tandoori Nuggets'
      ]
    },
    hot: {
      header: 'HOT COFFEE',
      paragraph: 'The traditional cuppa of coffee!!',
      submenu: [
        'Hot Bounvita',
        'Hot Mocha',
        'Hot Chocolate'
      ]
    },
    sandwiches: {
      header: 'VEG CHEESE SANDWICH',
      paragraph: 'The simple veg sandwich upgraded with real cheese!',
      submenu: [
        'Club Sandwich',
        'Veg Cheese Sandwich',
        'Veg Cheese Grill Sandwich',
        'Veg Sandwich',
        'Veg Grill Sandwich'
      ]
    }
  }

  itemClick(e: any) {
    console.log(e);
    const cid = e.target.dataset.id;
    debugger;
    const targetElem: any = document.getElementById(cid)
    if (this.oldElem) this.oldElem.style.display = 'none';
    targetElem.style.display = 'block';
    targetElem.scrollIntoView();
    this.oldElem = targetElem;

    const info = this.data[cid];
    this.header = info.header;
    this.paragraph = info.paragraph;
    this.subMenu = info.submenu;
  }

}
