let file = {
    data: null,
    isImported: false,
    load() {
        this.isImported = true
    },

}

const dataInStorage = localStorage.getItem('excelData')

var parsed = JSON.parse(dataInStorage)
if (typeof parsed == 'object') {
    file.isImported = true
}

export default file