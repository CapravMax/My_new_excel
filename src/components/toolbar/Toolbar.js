import {ExcelComponent} from 'core/ExcelComponent'
export class Toolbar extends ExcelComponent{
    static className='excel__toolbar'
    toHTML () {
        return ` <div class="button">
                <i class="material-icons">format_align_left</i>
                <i class="material-icons">format_align_center</i>
                <i class="material-icons">format_align_right</i>
                <i class="material-icons">format_align_justify</i>
                <i class="material-icons">format_bold</i>
                <i class="material-icons">format_italic</i>
                <i class="material-icons">format_underlined</i>
            </div>`
    }
}