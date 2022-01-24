import { useParams } from "react-router-dom";
import styled from "styled-components";
const User = () => {
    const Title = styled.h3`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
    const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
    let params = useParams();
    return <Wrapper>
        <Title>
        User Details {params.id}
        </Title>
    </Wrapper>
    // <div>User Details {params.id}</div>
}
export default User