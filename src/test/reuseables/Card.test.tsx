import "@testing-library/react"
import {render, screen} from "@testing-library/react";
import Card from "../../reuseables/Card";


describe("test Card component", ()=> {
    // beforeEach(()=>{
    //     // eslint-disable-next-line testing-library/no-render-in-setup
    //
    // })

    it('should contain card component', () => {
        render(
            <Card id={"first"} src={`https://i.pinimg.com/236x/b9/36/1b/b9361b8bfdc46704fad23b57d1bbcfff.jpg`}/>
        )
        const card = screen.getAllByTestId("first")
        expect(card).toBeInTheDocument()
    });
})