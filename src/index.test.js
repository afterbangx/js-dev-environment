import { expect } from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  })
});

describe('index.html', () => {
  // done is used here to simulate an async callback so mocha knows when to evaluate the expect
  it('should say hello', (done) => {
    const index = fs.readFileSync('./src/index.html', 'utf-8');

    // you can optionally provide an array of JS files to load into
    // the JSDOM environment as the second parameter if needed
    jsdom.env(index, function(err, window) {
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("Hello, World?");
      done();
      window.close();
    });
  })
})
