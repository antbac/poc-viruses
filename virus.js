setInterval(() => {
    const banner = document.createElement('div');
    banner.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0').toUpperCase()}`;
    banner.style.position = 'absolute';
    banner.style.top = `${Math.floor(Math.random() * 100)}%`;
    banner.style.left = `${Math.floor(Math.random() * 100)}%`;
    banner.style.border = '5px dotted black';
    banner.style.width = '25vw';
    banner.style.height = '25vh';
    banner.style.lineHeight = '25vh';
    banner.style.textAlign = 'center';
    banner.style.fontSize = '24';
    banner.appendChild(document.createTextNode([
        '! You have a virus !',
        '! This site has been hacked !',
        '! Contact Microsoft Support !',
        '! Your battery has been hacked !',
    ][Math.floor(Math.random() * 4)]))
    document.body.appendChild(banner);
}, 700);