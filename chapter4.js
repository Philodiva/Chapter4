function getPilihanComputer() {
    const comp = Math.random()
    if( comp < 0.34 ) return 'batu';
    if( comp >= 0.34 && comp < 0.67 ) return 'gunting';
    return 'kertas';
    
}

function getHasil(comp, player) {
    if( player == comp ) return 'DRAW';
    if( player == 'batu' ) return ( comp == 'gunting' ) ? 'PLAYER WIN'
        : 'COM WIN';
    if( player == 'gunting' ) return ( comp == 'batu' ) ? 'COM WIN'
        : 'PLAYER WIN';
    if( player == 'kertas' ) return ( comp == 'gunting' ) ? 'COM WIN'
        : 'PLAYER WIN';
}

const pBatu = document.querySelector('.batu')
pBatu.addEventListener('click', function() {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pBatu.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    const info = document.querySelector('.info'); 
    info.innerHTML = hasil;

});

const pGunting = document.querySelector('.gunting')
pGunting.addEventListener('click', function() {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pGunting.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);


    const info = document.querySelector('.info');
    info.innerHTML = hasil;

});

const pKertas = document.querySelector('.kertas')
pKertas.addEventListener('click', function() {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pKertas.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);


    const info = document.querySelector('.info');
    info.innerHTML = hasil;

});