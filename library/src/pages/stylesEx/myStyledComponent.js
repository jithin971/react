
import { Container, Header, LeftPannel, List, ListItem, RightPannel, Title, Views } from "./mystyle"

const MystyledComponent = () => {
    return (
        <Container>
            <Header><Title>Welcome to Styled Components</Title></Header>
            <Views>
                <LeftPannel>
                    <ul>
                        <li>Tea</li>
                        <li>Coffee</li>
                        <li>Soft Drinks</li>
                    </ul>
                    <List>
                        <ListItem>One</ListItem>
                        <ListItem>Two</ListItem>
                        <ListItem>Three</ListItem>
                    </List>

                </LeftPannel>
                <RightPannel>details</RightPannel>
            </Views>
            <div>footer</div>
        </Container>
    )
}

export default MystyledComponent