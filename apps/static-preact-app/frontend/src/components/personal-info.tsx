//@ts-nocheck
const { h, Component } = preact;
import htm from 'https://cdnjs.cloudflare.com/ajax/libs/htm/3.1.1/htm.module.js';

const html = htm.bind(h);

export class PersonalInfo extends Component {
  render() {
    return html`
      <section>
        <div>Персональная информация</div>
      </section>
    `;
  }
}
