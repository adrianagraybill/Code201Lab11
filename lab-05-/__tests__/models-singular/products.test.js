const Products = require('../../models-singular/products.js');
let products = new Products();

const supergoose = require('../supergoose.js');

describe('Producst Model (Singular)', () => {

  // How will you handle both the happy path and edge cases in these tests?

  it('can create() a new product', () => {
    let obj = {
      name: 'Peter',
      description: 'Is a pilot',
      price: 50.99,
      category: 'Person',
    };
    return products.create(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });

  it('can get() a products', () => {
    let obj = {
      name: 'Tyler',
      description: 'Is a contractor',
      price: 100.99,
      category: 'Person',
    };
    return products.create(obj)
      .then(record => {
        return products.get(record._id)
          .then(product => {
            Object.keys(obj).forEach(key => {
              expect(product[0][key]).toEqual(obj[key]);
            });
          });
      });
  });

  xit('can get() all products', () => {
  });

  xit('can update() a products', () => {
  });

  xit('can delete() a products', () => {
  });

});
