function imprimeurquiimprimemonrapport() {
    return new Promise((resolve, reject) => {
        const jimprimecingcentfeuilles = 500;
        if (jimprimecingcentfeuilles < 500) {
            reject('Imprimeur : Désolé, je n\'ai plus assez de feuilles !');
        };
        resolve(jimprimecingcentfeuilles);
    });
}

function imprimeurquiimprimemoncv() {
    return new Promise((resolve, reject) => {
        const jimprimeunefeuille = 1;
        if (jimprimeunefeuille < 1) {
            reject('Imprimeur : Désolé, je n\'ai plus assez de feuilles !');
        };
        resolve(jimprimeunefeuille);
    });
}

function imprimeurquiimprimemonjournal() {
    return new Promise((resolve, reject) => {
        const jimprimevingtfeuilles = 20;
        if (jimprimevingtfeuilles < 20) {
            reject('Imprimeur : Désolé, je n\'ai plus assez de feuilles !');
        };
        resolve(jimprimevingtfeuilles);
    });
}


Promise.all([
    imprimeurquiimprimemonrapport(),
    imprimeurquiimprimemoncv(),
    imprimeurquiimprimemonjournal(),
])
    .then((result) => {
        console.log(`Voilà le rapport de ${result[0]} pages, le cv de ${result[1]} page et le journal de ${result[2]} pages. Terminé !`);
    }) .catch((errors) => {
        console.log(errors);
    });

console.log('Je continue à faire mes emplettes dans le magasin pendant que l\'imprimeur imprime !')
