import { reactive } from 'vue'

const _modal = reactive({
    visible: false,
})

function CLOSE_MODAL() {
    _modal.visible = false;
}

export {
    _modal,
    CLOSE_MODAL
}