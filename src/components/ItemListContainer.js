import React, { useState, useEffect } from 'react';
import './style.css';
import { ItemList } from './ItemList';
import qatar from '../assets/img/qatar.png';
import qatar2 from '../assets/img/qatar2.png';
import ecuador from '../assets/img/ecuador.png';
import ecuador2 from '../assets/img/ecuador2.png';
import senegal from '../assets/img/senegal.png';
import senegal2 from '../assets/img/senegal2.png';
import holanda from '../assets/img/holanda.png';
import holanda2 from '../assets/img/holanda2.png';
import inglaterra from '../assets/img/inglaterra.png';
import inglaterra2 from '../assets/img/inglaterra2.png';
import iran from '../assets/img/proximamente.png';//faltan
import iran2 from '../assets/img/proximamente.png';//faltan
import usa from '../assets/img/usa.png';
import usa2 from '../assets/img/usa2.png';
import gales from '../assets/img/gales.png';
import gales2 from '../assets/img/gales2.png';
import argentina from '../assets/img/argentina.png';
import argentina2 from '../assets/img/argentina.png';
import arabia from '../assets/img/arabia.png';
import arabia2 from '../assets/img/arabia2.png';
import mexico from '../assets/img/mexico.png';
import mexico2 from '../assets/img/mexico2.png';
import polonia from '../assets/img/polonia.png';
import polonia2 from '../assets/img/polonia2.png';
import francia from '../assets/img/francia.png';
import francia2 from '../assets/img/francia2.png';
import australia from '../assets/img/australia.png';
import australia2 from '../assets/img/australia2.png';
import dinamarca from '../assets/img/proximamente.png';//faltan
import dinamarca2 from '../assets/img/proximamente.png';//faltan
import tunez from '../assets/img/proximamente.png';//faltan
import tunez2 from '../assets/img/proximamente.png';//faltan
import spain from '../assets/img/spain.png';
import spain2 from '../assets/img/spain.png';
import costaRica from '../assets/img/proximamente.png';//faltan
import costaRica2 from '../assets/img/proximamente.png';//faltan
import alemania from '../assets/img/alemania.png';
import alemania2 from '../assets/img/alemania2.png';
import japon from '../assets/img/japon.png';
import japon2 from '../assets/img/japon2.png';
import belgica from '../assets/img/belgica.png';
import belgica2 from '../assets/img/belgica2.png';
import canada from '../assets/img/canada.png';
import canada2 from '../assets/img/canada2.png';
import marruecos from '../assets/img/marruecos.png';
import marruecos2 from '../assets/img/marruecos2.png';
import croacia from '../assets/img/croacia.png';
import croacia2 from '../assets/img/croacia2.png';
import brasil from '../assets/img/brasil.png';
import brasil2 from '../assets/img/brasil2.png';
import serbia from '../assets/img/serbia.png';
import serbia2 from '../assets/img/serbia2.png';
import suiza from '../assets/img/suiza.png';
import suiza2 from '../assets/img/suiza2.png';
import camerun from '../assets/img/proximamente.png';//faltan
import camerun2 from '../assets/img/proximamente.png';//faltan
import portugal from '../assets/img/portugal.png';
import portugal2 from '../assets/img/portugal2.png';
import ghana from '../assets/img/proximamente.png';
import ghana2 from '../assets/img/proximamente.png';
import uruguay from '../assets/img/uruguay.png';
import uruguay2 from '../assets/img/uruguay2.png';
import korea from '../assets/img/proximamente.png';///faltan
import korea2 from '../assets/img/proximamente.png';///faltan


const productos = [

    {
        id: 1,
        name: "Qatar",
        precio: 100,
        marca: "Nike",
        img: qatar,
        img2: qatar2
    },
    {
        id: 2,
        name: "Ecuador",
        precio: 120,
        marca: "Marathon",
        img: ecuador,
        img2: ecuador2

    },
    {
        id: 3,
        name: "Senegal",
        precio: 130,
        medidas: "1x0.6",
        img: senegal,
        img2: senegal2
    },
    {
        id: 4,
        name: "Holanda",
        precio: 145,
        marca: "Nike",
        img: holanda,
        img2: holanda2

    },
    {
        id: 5,
        name: "Inglaterra",
        precio: 145,
        marca: "Nike",
        img: inglaterra,
        img2: inglaterra2

    },
    {
        id: 6,
        name: "Iran",
        precio: 145,
        marca: "",
        img: iran,
        img2: iran2

    },
    {
        id: 7,
        name: "Usa",
        precio: 145,
        marca: "Nike",
        img: usa,
        img2: usa2

    },
    {
        id: 8,
        name: "Gales",
        precio: 145,
        marca: "Adidas",
        img: gales,
        img2: gales2

    },
    {
        id: 9,
        name: "Argentina",
        precio: 145,
        marca: "Adidas",
        img: argentina,
        img2: argentina2

    },
    {
        id: 10,
        name: "Arabia Saudi",
        precio: 145,
        marca: "Nike",
        img: arabia,
        img2: arabia2

    },
    {
        id: 11,
        name: "Mexico",
        precio: 145,
        marca: "Adidas",
        img: mexico,
        img2: mexico2

    },
    {
        id: 12,
        name: "Polonia",
        precio: 145,
        marca: "Nike",
        img: polonia,
        img2: polonia2

    },
    {
        id: 13,
        name: "Francia",
        precio: 145,
        marca: "Nike",
        img: francia,
        img2: francia2

    },
    {
        id: 14,
        name: "Australia",
        precio: 145,
        marca: "Nike",
        img: australia,
        img2: australia2

    },
    {
        id: 15,
        name: "Dinamarca",
        precio: 145,
        marca: "",
        img: dinamarca,
        img2: dinamarca2

    },
    {
        id: 16,
        name: "Tunez",
        precio: 145,
        marca: "",
        img: tunez,
        img2: tunez2

    },
    {
        id: 17,
        name: "España",
        precio: 145,
        marca: "Adidas",
        img: spain,
        img2: spain2

    },
    {
        id: 18,
        name: "Costa Rica",
        precio: 145,
        marca: "",
        img: costaRica,
        img2: costaRica2

    },
    {
        id: 19,
        name: "Alemania",
        precio: 145,
        marca: "Adidas",
        img: alemania,
        img2: alemania2

    },
    {
        id: 20,
        name: "Japon",
        precio: 145,
        marca: "Adidas",
        img: japon,
        img2: japon2

    },
    {
        id: 21,
        name: "Belgica",
        precio: 145,
        marca: "Adidas",
        img: belgica,
        img2: belgica2

    },
    {
        id: 22,
        name: "Canada",
        precio: 145,
        marca: "Nike",
        img: canada,
        img2: canada2

    },
    {
        id: 23,
        name: "Marruecos",
        precio: 145,
        marca: "Puma",
        img: marruecos,
        img2: marruecos2

    },
    {
        id: 24,
        name: "Croacia",
        precio: 145,
        marca: "Nike",
        img: croacia,
        img2: croacia2

    },
    {
        id: 25,
        name: "Brasil",
        precio: 145,
        marca: "Nike",
        img: brasil,
        img2: brasil2

    },
    {
        id: 26,
        name: "Serbia",
        precio: 145,
        marca: "Puma",
        img: serbia,
        img2: serbia2

    },
    {
        id: 27,
        name: "Suiza",
        precio: 145,
        marca: "Puma",
        img: suiza,
        img2: suiza2

    },
    {
        id: 28,
        name: "Camerun",
        precio: 145,
        marca: "Puma",
        img: camerun,
        img2: camerun2

    },
    {
        id: 29,
        name: "Portugal",
        precio: 145,
        marca: "Nike",
        img: portugal,
        img2: portugal2

    },
    {
        id: 30,
        name: "Ghana",
        precio: 145,
        marca: "Puma",
        img: ghana,
        img2: ghana2

    },
    {
        id: 31,
        name: "Uruguay",
        precio: 145,
        marca: "Puma",
        img: uruguay,
        img2: uruguay2

    }, {
        id: 32,
        name: "South Korea",
        precio: 145,
        marca: "Nike",
        img: korea,
        img2: korea2

    },

];

export const ItemListContainer = () => {
    const [data, setData] = useState([]);


    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(productos);
            }, 2000);
        });
        getData.then(res => setData(res));
    }, [])





    return (

        <div className='body-container'>
            <div className='item-grid'>
                <ItemList data={data} />
            </div>
        </div>
    )
};

