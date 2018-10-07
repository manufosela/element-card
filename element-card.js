import { LitElement, html } from '/node_modules/@polymer/lit-element/lit-element.js';
import {afterNextRender, beforeNextRender} from '/node_modules/@polymer/polymer/lib/utils/render-status.js';
import '/node_modules/@manufosela/nav-list/nav-list.js';
import '/node_modules/@manufosela/circle-percent/circle-percent.js';

/**
 * `element-card`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class ElementCard extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      description: { type: String },
      navlist: { type: Object },
      circlepercent: { type: Object },
      cover: { type: String },
      coverBgColor: { type: String },
      textColor: { type: String },
    }
  }

  constructor() {
    super();
    beforeNextRender(this, function() {
      
    });
    afterNextRender(this, function() {
      this.renderRoot.querySelector(".element-title").classList.add('showTitle');
      this.renderRoot.querySelector(".element-desc").classList.add('showDesc');
      this.renderRoot.querySelector(".element-ctr").classList.add('showDesc');

    });
    this.title = "Javascript";
    this.description = "Advocate. ES6, ES7, functional programming";
    this.navlist = {
      title: "YEARS EXPERIENCE",
      value: ">10",
      list: "<3,3-5,5-10,>10",
      fixed: "true"
    }
    this.circlepercent = {
      percent: 100,
      title: "REFERENCE KNOWLEDGE"
    }
    this.img_cover = this._getCoverImg();
    this.coverBgColor = "rgba(0, 0, 0, 0.7)";
    this.textColor = "#FFF";
  }

  _getCoverImg() {
    let img = (this.img)?html`<img src="${this.img}" alt="${this.title}" style="opacity: 0.3">`:html`<!--COVER-->`;
    return img;
  }

  render() {
    return html`
    <style>
    :host {
      display: block;
      font-family: "Uni Sans", sans-serif;
      font-weight: 500;
    }
    .element-card {
      height: 100%;
      display: flex;
      align-items: center;
      width: 100%;
      transition: all 0.5s;
      overflow: hidden;
      position: relative;
      border-radius: 30px;
    }
    @media screen and (max-width: 992px) {
      .element-card {
        align-items: flex-start;
      }
    }
    @media screen and (max-width: 767px) {
      .element-card {
        border-radius: 20px;
      }
    }
    .element-cover {
      border-radius: 30px;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
      opacity: 1;
      background-color:${this.coverBgColor};
    }
    @media screen and (max-width: 767px) {
      .element-cover {
        border-radius: 20px;
      }
    }
    .element-content {
      color: ${this.textColor};
      padding-top: 1px;
      position: relative;
      z-index: 2;
      width: 100%;
      padding-left: 250px;
      padding-right: 80px;
    }
    @media screen and (max-width: 1200px) {
      .element-content {
        padding-left: 220px;
      }
    }
    @media screen and (max-width: 992px) {
      .element-content {
        padding: 20px 60px 100px;
        padding-top: 280px;
        text-align: center;
      }
    }
    @media screen and (max-width: 767px) {
      .element-content {
        padding: 20px 30px 50px;
        padding-top: 300px;
      }
    }
    @media screen and (max-width: 576px) {
      .element-content {
        padding-top: 220px;
        padding-left: 15px;
        padding-right: 15px;
      }
    }
    .element-title {
      margin: 0;
      margin-bottom: 10px;
      font-weight: 900;
      font-size: 41px;
      line-height: 1.2em;
      letter-spacing: 2px;
      opacity: 0;
      transform: translateY(-55px);
    }

    @media screen and (max-width: 1200px) {
      .element-title {
        font-size: 34px;
      }
    }
    @media screen and (max-width: 576px) {
      .element-title {
        font-size: 24px;
      }
    }
    .element-desc {
      display: block;
      font-size: 42px;
      opacity: 0;
      transform: translateY(-110px);
    }

    @media screen and (max-width: 1200px) {
      .element-desc {
        font-size: 36px;
      }
    }
    @media screen and (max-width: 576px) {
      .element-desc {
        font-size: 30px;
      }
    }
    .element-ctr {
      display: flex;
      align-items: center;
      min-height: 150px;
      margin-top: 40px;
      opacity: 0;
      transform: translateY(-165px);
    }
    @media screen and (max-width: 992px) {
      .element-ctr {
        justify-content: center;
      }
    }
    .element-ctr .hr-vertical {
      width: 1px;
      background: #9fa3a7;
      align-self: stretch;
      margin: 0 35px;
      flex-shrink: 0;
      opacity: 0.5;
    }
    @media screen and (max-width: 767px) {
      .element-ctr {
        justify-content: center;
        flex-wrap: wrap;
        margin-bottom: 40px;
      }
      .element-ctr .hr-vertical {
        width: 100%;
        margin: 35px 0;
        height: 1px;
      }
    }
    .showTitle {
      opacity: 1;
      transform: translateY(0px);
      transition: all 0.5s;
    }
    .showDesc {
      opacity: 1;
      transform: translateY(0px);
      transition: all 1s;
    }
  </style>
  <div class="element-card">
    <div class="element-cover">
      ${this.img_cover}
    </div>
    <div class="element-content">
      <h1 class="element-title">
        ${this.title}
      </h1>
      <span class="element-desc">
        ${this.description}
      </span>
      <div class="element-ctr">
        <div class="element-labels">
          <nav-list title="${this.navlist.title}" value="${this.navlist.value}" list="${this.navlist.list}" fixed="${this.navlist.fixed}"></nav-list>
        </div>

        <span class="hr-vertical"></span>

        <div class="element-inf">
          <circle-percent percent="${this.circlepercent.percent}" title="${this.circlepercent.title}"></circle-percent>
        </div>

      </div>

    </div>
    `
  }
}

window.customElements.define('element-card', ElementCard);
