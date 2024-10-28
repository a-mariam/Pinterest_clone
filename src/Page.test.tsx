import '@testing-library/react'
import {queryAllByAttribute, queryByAttribute, render, screen} from "@testing-library/react";
import Page from "./Page";



describe('testing page component', ()=>{

    it('testing if page render called', ()=>{
        const getById = queryByAttribute.bind(null, 'id')
        const view  = render(<Page/>)
        expect(getById(view.container,'button')).toBeInTheDocument()
    })
} )