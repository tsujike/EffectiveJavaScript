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

    displayPage(source) {
      const page = this.format(source);
      const title = page.getTitle();
      const author = page.getAuthor();
      const outPut = page.toHTML();
      return outPut;
    }

  }

  //静的プロパティ(MEDIAWIKIフォーマット（仮）の定義)
  Wiki.formats = {
    MEDIAWIKI(source) {
      return new MWPage(source);
    }

  }


  /** クラスPage */
  class Page {
    constructor(source) {
      this.source = source;
    }

  }

  /** クラスMWPage */
  class MWPage extends Page {

    constructor(source) {
      super(source);
    }

    getTitle() { return this.source.title; }
    getAuthor() { return this.source.author; }
    toHTML() { return '<!doctype html> <html lang="ja"> <head>...'; }
  }


  //MEDIAWIKIフォーマットを適用するためのインスタンス
  const app = new Wiki(Wiki.formats.MEDIAWIKI);


  //ユーザーがMEDIAWIKIフォーマット（仮）で作成したコンテンツ
  const source = {
    title: 'クロージャ',
    author: 'KENZO TSUJI',
    body: `クロージャとは、**スコープチェーンを遡って**変数を参照する仕組みを持っている**関数**`
  }

  //レンダリング（HTMLを生成してWebページを表示する）処理
  console.log(app.displayPage(source)); // => <!doctype html> <html lang="ja"> <head>...

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
      return outPut;
    }

  }

  //静的プロパティ(MEDIAWIKIフォーマット（仮）の定義)
  Wiki.formats = {
    MEDIAWIKI(source) {

      const obj = {
        getTitle() { return source.title; },
        getAuthor() { return source.author; },
        toHTML() { return '<!doctype html> <html lang="ja"> <head>...'; }
      };

      return obj;
    }

  }


  //MEDIAWIKIフォーマットを適用するためのインスタンス
  const app = new Wiki(Wiki.formats.MEDIAWIKI);

  //ユーザーがMEDIAWIKIフォーマット（仮）で作成したコンテンツ
  const source = {
    title: 'クロージャ',
    author: 'KENZO TSUJI',
    body: `クロージャとは、**スコープチェーンを遡って**変数を参照する仕組みを持っている**関数**`
  }

  //レンダリング（HTMLを生成してWebページを表示する）処理
  console.log(app.displayPage(source)); // => <!doctype html> <html lang="ja"> <head>...

}





function myFunction57_03() {



}



function myFunction57_04() {


}



