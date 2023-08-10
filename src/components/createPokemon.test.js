/**
 * @jest-environment jsdom
 */

import createPokemonContainer from "./createPokemon.js";

describe('createPokemonContainer', () => {
    const name = 'Pikachu';
    const image = 'image_url';
    const types = ['Electric'];

    const container = createPokemonContainer(name, image, types);
    const h2 = container.querySelector('h2');
    const img = container.querySelector('img');
    const h3 = container.querySelector('h3');
    const ul = container.querySelector('ul');

    test('container nodeName -> DIV', () => {
        expect(container.nodeName).toEqual('DIV');
    });

    test('container className -> pokemon-container', () => {
        expect(container.className).toEqual('pokemon-container');
    });

    test('h2 innerText -> Pikachu', () => {
        expect(h2.innerText).toEqual('Pikachu');
    });

    test('img src -> "image_url"', () => {
        expect(img.src).toEqual('http://localhost/image_url');
    });

    test('img alt -> "Pikachu"', () => {
        expect(img.alt).toEqual('Pikachu');
    });

    test('h3 innerText -> Types:', () => {
        expect(h3.innerText).toEqual('Types:');
    });

    test('ul childElementCount -> 1', () => {
        expect(ul.childElementCount).toEqual(1);
    });

    test('ul first child innerText -> Electric', () => {
        const li = ul.querySelector('li');
        expect(li.innerText).toEqual('Electric');
    });
});
