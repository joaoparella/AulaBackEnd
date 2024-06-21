const celulares = [{
    tamanho: 5,
    cor: "azul",
    sistema: "android",
    qtdeCameras: 5,
    processador: "snapdragon 8",
    qtdeMemoriaRam: 16,
    qtdeMemoriaInterna: 64,
    toque: "tlim tlim tlim",
    tocar: function(toque){
    console.log(toque)
    }
},
    {
    tamanho: 5,
    cor: "azul",
    sistema: "ios",
    qtdeCameras: 3,
    processador: "a12",
    qtdeMemoriaRam: 6,
    qtdeMemoriaInterna: 128,
    toque: "trim trim trim",
    tocar: function(toque){
    console.log(toque)
    }
}]


celulares[0].qtdeMemoriaInterna = 256
celulares[0].tocar(celulares[0].qtdeMemoriaInterna);