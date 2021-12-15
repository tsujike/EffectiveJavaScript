//マークアップ言語とは
//This sentence contains a *bold phrase* within it.
//This sentence contains an _underlined phrase_ within it.
//This sentence contains an /italized phrase/ within it.


function myFunction57_01() {

  /** クラスWiki */
  class Wiki {

    constructor(format) {
      this.format = format;
    }

  }

  // const wiki = { formats: { 'MEDIAWIKI'  };

  const app = new Wiki(Wiki.formats.MEDIAWIKI);
  console.log(app);
}


function myFunction57_02() {

  /** クラスWiki */
  class Wiki {

    constructor(format) {
      this.format = format;
    }

    displayPage(source) {
      const page = this.format(source);
      const title = page.getTitle();
      const author = page.getAuthor();
      const outPut = page.toHTML();
    }

  }
}


function myFunction57_03() {

  /** クラスPage */
  class Page {
    constructor(source) {
      this.source = source;
    }

  }


  /** クラスMWPage
   * @extends Page
   */
  class MWPage extends Page {

    constructor(source) {
      super(source);

    }

    getTitle() {
      //処理  
    }

    getAuthor() {
      //処理   
    }

    toHTML() {
      //処理    
    }

  }



  /** クラスWiki */
  class Wiki {

    constructor(format) {
      this.format = format;
    }

    displayPage(source) {
      const page = this.format(source);
      const title = page.getTitle();
      const author = page.getAuthor();
      const outPut = page.toHTML();
    }

  }

  //MWPageインスタンスを返すファクトリー関数
  Wiki.formats = {
    MEDIAWIKI(source) {
      return new MWPage(source);
    }
  }




}



function myFunction57_04() {

  /** クラスWiki */
  class Wiki {

    constructor(format) {
      this.format = format;
    }

  }

  //静的プロパティ
  Wiki.formats = {
    MEDIAWIKI(source) {

      const obj = {
        getTitle() {/* ... */ },
        getAuthor() {/* ... */ },
        toHTML() {/* ... */ }
      };

      return obj;
    }

  }

}



