import { reactive } from 'vue'

const _toast = reactive({
    text: '',
    type: '',
    visible: false,
})

function OPEN_NOTIFICATION(text: string, type: string) {
    _toast.text = text
    _toast.type = type
    _toast.visible = true

    
    setTimeout(() => {
        _toast.visible = false;
        setTimeout(() => {
            _toast.text = '';
            _toast.type = '';
        }, 300);
    }, 2000)
}

export {
    _toast,
    OPEN_NOTIFICATION
}
