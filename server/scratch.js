const _ = require('underscore');
let d = [
  {
    product_id: 1,
    image: 'https://paperclip.link/data/images/products/1/1.jpg'
  },
  {
    product_id: 1,
    image: 'https://paperclip.link/data/images/products/1/2.jpg'
  },
  {
    product_id: 2,
    image: 'https://paperclip.link/data/images/products/2/1.jpg'
  },
];



let x = _.where(d, {product_id: 1});

console.log(_.pluck(x, 'image'));
