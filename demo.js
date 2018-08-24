class main {

  constructor(params) {
    this.container = params.container;
  }

  runTest() {
    setInterval( () => {
      this.changeVar('#root-container', Math.floor(Math.random() * 200) + 100 );
    }, 1000);
  }

  changeVar(selector, n) {
    for(let sheet of Array.from(document.styleSheets)) {
      if(sheet.title == 'demo') {
        sheet.deleteRule(selector);
        sheet.insertRule(`${selector} {--demo-div-left:${n}px;}`);
      }
    }

    const el = document.querySelector(selector);
    const readValue =  window.getComputedStyle(el).getPropertyValue('--demo-div-left');
    if(readValue == n + 'px') {
      console.log(`Value of --demo-div-left is updated succesfully to ${readValue}`);
    }
  }
}

const m = new main({ container: document.getElementById('root-container') });
m.runTest();
