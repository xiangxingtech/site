import { Component } from "@stencil/core";

@Component({
  tag: "app-home",
  styleUrl: "app-home.css"
})
export class AppHome {
  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-title>XiangXingTech</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content padding>
        <div class="hero-wrapper u-mb40">
          <div class="logo">
            <aa-svg aa="　　／￣￣￣＼ \n　　|　･ （＿）　　| \n　　|　| 　　　　　|～ \n　 くノ|,_,|￣￣|,_,| " />
          </div>
          <div class="title">The power of the Web is infinite</div>
        </div>
        <div class="u-divider" />
        <div class="profile-wrapper">
          <ion-icon name="person" color="danger" />
          <div class="title u-mt8 u-fwe-bold">プロフィール</div>
          <div class="profile">
            <div class="u-mb12">会社員&フリーランスの両刀エンジニアです。</div>
            <div class="u-mb12">
              個人的にAA（アスキーアート）が趣味です。AAを扱いやすくするためにサービス、ツールを開発・運用したりしてるエンジニアです。
            </div>
            <div class="u-mb20">AA界隈を盛り上げたい。 </div>
            社会人的には、
            <ul>
              <li>美容系動画アプリの企画、開発、運用</li>
              <li>暗号通貨NEMのウォレット開発</li>
              <li>電話の内線システムの開発</li>
              <li>マルチプラットフォームのマッチングアプリ開発</li>
            </ul>
            <div class="u-mb12">
              等を経験しています。主に「作る」ことを多く経験しています。
            </div>
            <div class="u-mb12">
              開発スキル的にはフロントエンドの開発が多いですが必要に応じてサーバーもいけます。
            </div>
            <div class="u-mb4 u-fwe-bold">スキル（得意順）</div>
            <div class="u-mb12">
              Ionic / Ionic / Golang / GCP / Firebase / NEM / Vue / Nuxt / AWS
            </div>
          </div>
        </div>
        <div class="u-divider" />
        <div class="products-wrapper">
          <ion-icon name="build" color="danger" />
          <div class="title u-mt8 u-fwe-bold u-mb12">プロダクト</div>
          <div class="product-wrapper">
            <div class="image-link-wrapper aahub">
              <a href="https://aahub.org" target="_blank">
                <aa-svg aa=" ┏━━┏━━┏┓┏┏┓┏┏━━┓\n ┃┏┓┃┏┓┃┃┃┃┃┃┃　━ ┃\n ┃┗┛┃┗┛┃┏┛┃┃┃┃　 ━┓\n ┃┏┓┃┏┓┃┃┃┃┗┛┃　━ ┃\n ┗┛┗┗┛┗┗┛┗┗━━┗━━┛" />
              </a>
            </div>
            <div class="title">AAHub</div>
            <div class="info">MLTまとめzipのWebビューワーです</div>
          </div>
          <div class="product-wrapper">
            <div class="image-link-wrapper aabox">
              <a href="https://aahub.org" target="_blank">
                <aa-svg aa=" 　　　　∧ ∧＿__\n 　 　／(*ﾟーﾟ)　／＼\n 　／|￣∪∪￣|＼／\n 　 　|　.AA箱.　|／\n 　　　￣￣￣￣" />
              </a>
            </div>
            <div class="title">AA箱</div>
            <div class="info">AA投稿＆保存サイトです。</div>
          </div>
        </div>
      </ion-content>
    ];
  }
}
