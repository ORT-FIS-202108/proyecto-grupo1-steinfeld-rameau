export const exportarExcel = (tableID, filename = '') => {
    var downloadLink;
    var dataType = 'application/vnd.ms-excel';
    var tableSelect = document.getElementById(tableID);
    var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');

    // Especificar nombre del archivo
    filename = filename?filename+'.xls':'excel_data.xls';

    // Seleccionar boton de descarga
    downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);

    if(navigator.msSaveOrOpenBlob){
        var blob = new Blob(['ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob( blob, filename);
    }else{
        // Crear link al archivo
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;

        // Poner nombre al archivo
        downloadLink.download = filename;

        // llamar a la funcion
        downloadLink.click();
    }
}