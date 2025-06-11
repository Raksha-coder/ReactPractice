import styled from 'styled-components';
const StyledComponent = () => {

  const Heading = styled.h1`
    color:red;
    border: 2px solid blue;
  `;

  const Para = styled.p`
    color:yellow;
    background:pink;    
  `;


  return (
    <div>
        <h1>Hellodcd dei</h1>
      <Heading>This is a style component. It is a Package and library.</Heading>
      <Para>This is a para</Para>
    </div>
  )
}

export default StyledComponent
