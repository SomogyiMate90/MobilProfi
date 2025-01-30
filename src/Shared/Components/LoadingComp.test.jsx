import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import React from "react";
import LoadingComp from "./LoadingComp.jsx";

describe('Loading componens működése',()=>{

    test('Alapértelmezett, ha nincs argomentum adva',()=>{

        render(<LoadingComp />);
        const h1Element = screen.getByText('Töltés...')
        expect(h1Element).toBeInTheDocument()
    })

    test('Amennyiben Stringet kap argomentumként',()=>{

        render(<LoadingComp displayText={"Valami"}/>)
        const h1Element = screen.getByText('Valami')
        expect(h1Element).toBeInTheDocument('Valami')

    })

    test('Amennyiben tömböt kap argomentumként',()=>{

        render(<LoadingComp displayText={["szöveg1",1,"szöveg3"]} />);
        const span1 = screen.getByText('szöveg1');
        const span2 = screen.getByText('1');
        const span3 = screen.getByText('szöveg3');

        expect(span1).toBeInTheDocument();
        expect(span2).toBeInTheDocument();
        expect(span3).toBeInTheDocument();
    })

    test('objektumot kap, hibát kéne adnia, majd az alapértelmezett szöveget kéne megjelenítenie',()=>{

        const testObj = {myKe1 : 'szöveg1', myKey2 : 'szöveg 2'}

        render(<LoadingComp displayText={testObj}/>);
        const h1Element = screen.getByText('Töltés...')
        expect(h1Element).toBeInTheDocument()

    })


})