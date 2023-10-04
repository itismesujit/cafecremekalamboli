import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenudataService {

  constructor() { }
  
  getMenuList() {
    return [
      { imgDir: '../../assets/1.jpg' , linkTitle: 'KUKA', id: 'kuka', link: '/kuka'},
      { imgDir: '../../assets/2.jpg' , linkTitle: 'EXCLUSIVE', id: 'kukaExclusive', link: '/kukaExclusive'},
      { imgDir: '../../assets/3.jpg' , linkTitle: 'MASTAN', id: 'cremeShakesMastani', link: '/cremeShakesMastani'},
      { imgDir: '../../assets/4.jpg' , linkTitle: 'SHAKES', id: 'cremeShakes', link: '/cremeShakes'},
      { imgDir: '../../assets/5.jpg' , linkTitle: 'SUNDAE', id: 'junket', link: '/junket'},
      { imgDir: '../../assets/6.jpg' , linkTitle: 'CREAMS', id: 'thunders', link: '/thunders'},
      { imgDir: '../../assets/7.jpg' , linkTitle: 'EXCLUSIVE', id: 'chocExclusive', link: '/chocExclusive'},
      { imgDir: '../../assets/8.jpg' , linkTitle: 'CRÉMES', id: 'chocoCremes', link: '/chocoCremes'},
      { imgDir: '../../assets/9.jpg' , linkTitle: 'SNACKS', id: 'snacks', link: '/snacks'},
      { imgDir: '../../assets/10.jpg' , linkTitle: 'HOT', id: 'hot', link: '/hot'},
      { imgDir: '../../assets/11.jpg' , linkTitle: 'SANDWICHES', id: 'sandwiches', link: '/sandwiches'},
    ]
  }

  getMenuData() {
    return {
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
  }
}
