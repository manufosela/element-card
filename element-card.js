import { LitElement, html, css } from 'lit-element';

/**
 * `element-card`
 * Element Card
 *
 * @customElement element-card
 * @polymer
 * @demo demo/index.html
 */
class ElementCard extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      description: { type: String },
      navlist: { type: String },
      circlepercent: { type: String },
      cover: { type: String },
      coverBgColor: { type: String, attribute: 'cover-bgcolor' },
      textColor: { type: String, attribute: 'text-color' },
      imgcover: { type: String, attribute: 'img-cover' }
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
        font-family: "Uni Sans", sans-serif;
        font-weight: 500;
        margin: 30px;
        --imgcover-max-width: 100%;
        --imgcover-opacity: 1;
        --fontsize: 16px;
      }
      .element-card {
        padding:60px 0 60px 0;
        height: 100%;
        display: flex;
        align-items: center;
        width: 100%;
        transition: all 0.5s;
        overflow: hidden;
        position: relative;
        border-radius: 30px;
        box-shadow: 0 28px 79px 0 rgba(10, 22, 31, 0.35);
        max-width: 1200px;
        font-size: var(--fontsize);
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
      }
      .element-cover img {
        max-width: var(--imgcover-max-width);
        opacity: var(--imgcover-opacity);
      }

      @media screen and (max-width: 767px) {
        .element-cover {
          border-radius: 20px;
        }
      }
      .element-content {
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
          text-align: center;
        }
      }
      @media screen and (max-width: 767px) {
        .element-content {
          padding: 20px 30px 50px;
        }
      }
      @media screen and (max-width: 576px) {
        .element-content {
          padding-left: 15px;
          padding-right: 15px;
        }
      }
      .element-title {
        margin: 0;
        margin-bottom: 10px;
        font-weight: 900;
        font-size: 2.625rem;
        line-height: 1.2rem;
        letter-spacing: 2px;
        opacity: 0;
        transform: translateY(-55px);
      }

      @media screen and (max-width: 1200px) {
        .element-title {
          font-size: 2.125rem;
        }
      }
      @media screen and (max-width: 576px) {
        .element-title {
          font-size: 1.5rem;
        }
      }
      .element-desc {
        display: block;
        font-size: 2.625rem;
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
        display: grid;
        grid-template-columns: 1fr 1px 1fr;
        grid-gap: 10px;
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
      ::slotted(.hr-vertical) {
        width: 1px;
        background: #9fa3a7;
        align-self: stretch;
        margin: 0;
        flex-shrink: 0;
        opacity: 0.5;
      }
      ::slotted(:last-child) {
        margin-top: 2rem;
        grid-column-start: 1;
        grid-column-end: 4;
        font-size:1.5rem;
      }
      @media screen and (max-width: 767px) {
        .element-ctr {
          grid-template-columns: 1fr;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }
        ::slotted(.hr-vertical) {
          width: 100%;
          margin: 35px 0;
          height: 1px;
        }
      }
      .element-inf-list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 30px;
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
    `;
  }

  constructor() {
    super();
    this.title = 'Element-card';
    this.description = 'Description from element-card';
    this.img_cover = html`<!--COVER-->`;
    this.coverBgColor = 'rgba(0, 0, 0, 0.7)';
    this.textColor = '#FFF';
  }

  firstUpdated() {
    /* 100ms DELAY to apply css transform */
    setTimeout(() => {
      this.renderRoot.querySelector('.element-title').classList.add('showTitle');
      this.renderRoot.querySelector('.element-desc').classList.add('showDesc');
      this.renderRoot.querySelector('.element-ctr').classList.add('showDesc');
      this._addSeparators();
      if (this.imgcover) {
        this.shadowRoot.querySelector('.element-cover').innerHTML = `<img src="${this.imgcover}" alt="${this.title}">`;
      }
    }, 100);
  }

  _addSeparators() {
    let children = Object.assign({}, this.children);
    let counter = 1;
    for (let ch in children) {
      if (children.hasOwnProperty(ch)) {
        if (counter % 2 === 0) {
          let d = document.createElement('span');
          d.className = 'hr-vertical';
          this.insertBefore(d, children[ch]);
        }
        counter++;
      }
    }
  }

  render() {
    return html`
      <style>
        .element-cover {
          background-color:${this.coverBgColor};
        }
        .element-content {
          color: ${this.textColor};
        }
        .element-desc, .element-title {
          text-align: ${(this.imgcover) ? 'center' : 'left' };
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
            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }
}

window.customElements.define('element-card', ElementCard);
