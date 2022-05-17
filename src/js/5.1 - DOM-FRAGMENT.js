const fragmento = document.createDocumentFragment();

fragmento.innerHTML = `
<h1 class="titulo">Hola javascript :D</h1>

    <p id="texto">

    </p>

    <p id="textoDinamico"></p>

    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>

    <button id="enviar" class="hola">Enviar</button>

    <input type="text" name="" id="miInput" placeholder="escribi algo">
`;

const container = document.querySelector('.container');
container.innerHTML = fragmento.innerHTML;