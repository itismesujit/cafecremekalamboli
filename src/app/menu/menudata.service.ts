import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenudataService {

  constructor() { }

  getMenuList() {
    return [
      { imgDir: '../../assets/1.jpg', linkTitle: 'KUKA', id: 'kuka', link: '/kuka' },
      { imgDir: '../../assets/2.jpg', linkTitle: 'EXCLUSIVE', id: 'kukaExclusive', link: '/kukaExclusive' },
      { imgDir: '../../assets/3.jpg', linkTitle: 'MASTAN', id: 'cremeShakesMastani', link: '/cremeShakesMastani' },
      { imgDir: '../../assets/4.jpg', linkTitle: 'SHAKES', id: 'cremeShakes', link: '/cremeShakes' },
      { imgDir: '../../assets/5.jpg', linkTitle: 'SUNDAE', id: 'junket', link: '/junket' },
      { imgDir: '../../assets/6.jpg', linkTitle: 'CREAMS', id: 'thunders', link: '/thunders' },
      { imgDir: '../../assets/7.jpg', linkTitle: 'EXCLUSIVE', id: 'chocExclusive', link: '/chocExclusive' },
      { imgDir: '../../assets/8.jpg', linkTitle: 'CRÉMES', id: 'chocoCremes', link: '/chocoCremes' },
      { imgDir: '../../assets/9.jpg', linkTitle: 'SNACKS', id: 'snacks', link: '/snacks' },
      { imgDir: '../../assets/10.jpg', linkTitle: 'HOT', id: 'hot', link: '/hot' },
      { imgDir: '../../assets/11.jpg', linkTitle: 'SANDWICHES', id: 'sandwiches', link: '/sandwiches' },
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

  getMenu():  { [key: string]: any[] }  {
    return {
      'Kuka': [
        { name: 'Kuka', price: 70 },
        { name: 'Kuka with crush', price: 70 },
        { name: 'Kuka with thunder', price: 70 },
        { name: 'White kuka', price: 70 },
        { name: 'Crunchy kuka', price: 80 },
        { name: 'Moka kuka', price: 80 },
        { name: 'Moka with crush', price: 80 },
        { name: 'Moka with thunder', price: 80 }
      ],

      'Choco crème': [
        { name: 'Choco crème- b', price: 120 },
        { name: 'Choco crème - m', price: 120 },
        { name: 'White choco crème', price: 120 },
        { name: 'Day night choco crème', price: 120 },
        { name: 'Kitkat choco crème', price: 120 },
        { name: 'Black forest choco crème', price: 120 },
        { name: 'Dark secret choco crème', price: 120 },
        { name: 'Ferrero choco crème', price: 140 }
      ],

      'Kuka exclusive': [
        { name: 'Tropical kuka', price: 100 },
        { name: 'Bournville kuka', price: 100 },
        { name: 'Black forest kuka', price: 100 },
        { name: 'Dark secret kuka', price: 100 },
        { name: 'Royal kuka', price: 150 }
      ],

      'Crème shake': [
        { name: 'Vanilla', price: 80 },
        { name: 'Strawberry', price: 80 },
        { name: 'Pista', price: 80 },
        { name: 'Butter scotch', price: 80 },
        { name: 'Orio shake', price: 80 },
        { name: 'Choco shake', price: 80 }
      ],

      'Crème mastani': [
        { name: 'Mango', price: 120 },
        { name: 'Strawberry', price: 120 },
        { name: 'Pista', price: 120 },
        { name: 'Butter scotch', price: 120 }
      ],

      'Ice crème': [
        { name: 'Vanilla', price: 70 },
        { name: 'Strawberry', price: 70 },
        { name: 'Pista', price: 70 },
        { name: 'Mango', price: 70 },
        { name: 'Guava', price: 80 },
        { name: 'Dark seceret', price: 80 },
        { name: 'Black forest', price: 80 },
        { name: 'Choco chips', price: 80 },
        { name: 'Romantic', price: 80 }
      ],

      'Hot beverage': [
        { name: 'Hot coffee', price: 60 },
        { name: 'Hot chocolate', price: 60 }
      ],

      'Junket': [
        { name: 'Choco crunch', price: 100 },
        { name: 'Double fudge', price: 100 },
        { name: 'Mix fruit', price: 100 },
        { name: 'Titanic', price: 120 },
        { name: 'Special café crème', price: 150 }
      ],

      'Mocktail': [
        { name: 'Virgin mojito', price: 80 },
        { name: 'Blue lagoon', price: 80 },
        { name: 'Berry mocha', price: 80 },
        { name: 'Berry ginger sparkler', price: 80 },
        { name: 'Spicy mango', price: 90 },
        { name: 'Spicy guava', price: 90 },
        { name: 'Kala khatta ice berge', price: 80 },
        { name: 'Tropical', price: 80 },
        { name: 'Mint cooler', price: 80 },
        { name: 'Frozen mountain', price: 80 },
        { name: 'Pina colada', price: 90 },
        { name: 'Piscola', price: 80 },
        { name: 'Pain killer', price: 80 },
        { name: 'Apple sour', price: 80 },
        { name: 'Punch N munch', price: 80 },
        { name: 'Wild kiwis', price: 90 },
        { name: 'Melon chiller', price: 80 },
        { name: 'Cranberry spritzer', price: 80 },
        { name: 'Peachy pine', price: 80 },
        { name: 'Sparkling berry', price: 80 }
      ],

      'Soft beverage': [
        { name: 'Coke can', price: 60 },
        { name: 'Sprite can', price: 60 },
        { name: 'Red bull', price: 150 },
        { name: 'Oreo smoothie', price: 70 },
        { name: 'Peanut butter smoothie', price: 80 }
      ],

      'Burger': [
        { name: 'Aloo tikki burger', price: 80 },
        { name: 'Aloo tikki cheese burger', price: 100 },
        { name: 'Spicy paneer burger', price: 120 },
        { name: 'Spicy chicken burger', price: 140 },
        { name: 'Haiwaiian burger', price: 150 }
      ],

      'Sandwich': [
        { name: 'Veg Grilled sandwich/cheese', price: 120 },
        { name: 'Cottage cheese sandwich', price: 140 },
        { name: 'Chocolate caramel sandwich', price: 100 },
        { name: 'Rosted chicken sandwich', price: 140 },
        { name: 'Minced chicken sandwich', price: 140 },
        { name: 'Scrambled egg toast', price: 120 }
      ],

      'Bites': [
        { name: 'French fries / peri peri fries', price: 90 },
        { name: 'Potato wedges', price: 100 },
        { name: 'Cheese corn nuggest', price: 120 },
        { name: 'Crunchy chicken pops', price: 150 },
        { name: 'Chicken nuggets', price: 200 }
      ],

      'maggi': [
        { name: 'Masala maggi', price: 80 },
        { name: 'Masala cheese maggi', price: 100 }
      ],

      'Pizza (10inch)': [
        { name: 'Café margherita', price: 180 },
        { name: 'Cheese corn pizza', price: 200 },
        { name: 'Spicy cottage cheese pizza', price: 220 },
        { name: 'Chicken fajita pizza', price: 250 },
        { name: 'Classic chicken pizza', price: 250 }
      ]
    }
  }
}
