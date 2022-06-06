import styled from 'styled-components';

const Detail = (detailMovie) => {

  return (
    <DetailWRap>
      <h3>
        상세 페이지<br/>
        준비중입니다.
      </h3>
    </DetailWRap>
  );
};

export default Detail;

const DetailWRap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #000;
  & h3{
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    color: #fff;
  }
`