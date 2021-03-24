import { LitElement, html, css } from 'lit-element';
import './myList'

class MyApp extends LitElement {
    static get properties() {
        return {
            list: { type: Array }
        };
    }
    static get styles(){
        return css`
            .awesomeBtn{
                padding: 10px 20px;
                border: 2px solid #BF930D;
                color: #BF930D;
                background-color: transparent;
                border-radius: 0;
                outline: none;
                transition:200ms;
            }
            .awesomeBtn:active{
                outline: none;
                transition:200ms;
                transform: scale(.8);
            }
        
        
        `
    }
    _getList(){
        return [
            {
                id: 1,
                name: 'Life is beautiful',
                year: 1997
            },
            {
                id: 2,
                name: 'Avengers - End game.',
                year: 2019
            },
            {
                id: 3,
                name: 'Interstellar',
                year: 2014
            },
            {
                id: 4,
                name: 'Hush',
                year: 2016
            },
            {
                id: 5,
                name: 'The purge',
                year: 2013
            }
        ]
    }
    _getEmptyList(){
        return []
    }
    _onCreateList(){
        this.list = this._getList()
    }
    _onEmptyList(){
        this.list = this._getEmptyList()
    }
    constructor() {
        super()
        this.list = this._getList()
    }
    render(){
        return html`
        <button class="awesomeBtn" @click="${this._onEmptyList}">Vaciar lista</button>
        <button class="awesomeBtn" @click="${this._onCreateList}">Crear lista</button>
        <my-list title="My favorite movies" .items=${this.list}></my-list> 
        `
    }
}
customElements.define('my-app', MyApp);