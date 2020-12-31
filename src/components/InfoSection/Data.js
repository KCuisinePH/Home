import promo from '../../images/promo.png'
import order from '../../images/how_to_order.svg'
import delivery from '../../images/delivery.svg'


export const homeObjOne = {
  id: 'promo',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  headline: 'Promo',
  shadow: true,
  visible: false,
  description: 'Buy 3 Japchae and Get 1 Free Honey Garlic Chicken.',
  buttonLabel: 'Pre Order',
  imgStart: true,
  imgURL: promo,
  alt: 'Japchae',
  dark: true,
  primary: true,
  darkText: false,
  fontBig: false
  
};

export const howToOrder = {
  id: 'howToOrder',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  headline: 'How To Order',
  shadow: false,
  visible: false,
  description: `Order Now via Facebook Messenger `,
  buttonLabel: 'Message us',
  imgStart:false,
  imgURL: order,
  alt: 'Japchae',
  dark: true,
  primary: true,
  darkText: false,
  fontBig: false
  
};

export const freeDelivery = {
  id: 'delivery',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  headline: 'Free Delivery',
  shadow: false,
  description: `Stay at Home. We will deliver to your door.`,
  visible: true,
  buttonLabel: 'Message us',
  imgStart:true,
  imgURL: delivery,
  alt: 'Japchae',
  dark: true,
  primary: true,
  darkText: false,
  fontBig: false
  
};