import styled from "styled-components"
import { Anchor, Button, Container, Container2, Input, Input2, Para1, Title, TitleFooter, Warpper } from "./styles"

const StyledComponent = () => {
    return (
        <div>
            <Warpper>
                <Title>hi welcome to styledComponents</Title>
                <TitleFooter>Thanks for the visit</TitleFooter>
            </Warpper>
            <Container>
                <Para1>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</Para1>
                <div>di2</div>
            </Container>
            <Container2>
                <Button primary>Button1</Button>
                <Button>button2</Button>
                <Anchor href="google.com">Details</Anchor>
            </Container2>

            <Container2>
                <Button primary as="a">Button1</Button>
                <Button as="div">button2</Button>

                <Input></Input>
                <Input2></Input2>
            </Container2>

        </div>
    )
}
export default StyledComponent