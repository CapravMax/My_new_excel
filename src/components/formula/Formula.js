import {ExcelComponent} from 'core/ExcelComponent'
export class Formula extends ExcelComponent{
    static className = 'excel__formula'
    constructor($root) {
        super($root, {
            name: 'Formula',
            listeners: ['input', 'click']
        });
    }
    toHTML () {
        return `  <div class="formula_info">Fx</div>
            <div class="formula_input" contenteditable="true" spellcheck="false"></div>`

}
    onInput (event) {
        console.log('Formula input', event)
    }
}