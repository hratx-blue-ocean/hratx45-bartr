import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MDBContainer, MDBCol, MDBRow } from 'mdbreact';
// import Navbar from '../components/Navbar';
// import userDb from '../dummy_data/users';
import productDb from '../dummy_data/products';
import Searchbar from '../components/Searchbar';
import TradeItem from '../components/TradeItem';
import { Grid, Row, Col } from '../components/CustomComponents';
import '../assets/styles/upForTradeScreen.scss';
import '../assets/styles/theme.scss';

const UpForTradeScreen = () => {
  const { userName, userId, userItems } = useSelector(store => store.userInfo);
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <Grid nopad fluid id="up-for-trade-screen" className="pad-edge-top">
      <Row>
        <Col mobile="12" className="center">
          Up For Trade
        </Col>
      </Row>
      <Row className="pad-bucket">
        <Col mobile="12">
          <Searchbar onChange={e => setSearchTerm(e.target.value)} />
        </Col>
      </Row>

      <Row nopad className="pad-bucket-plus">
        {userItems.map(p => (
          <Col mobile="12" tablet="6" desktop="4">
            <TradeItem
              data={p}
              image={
                'https://i.kym-cdn.com/entries/icons/mobile/000/025/765/Screen_Shot_2018-03-23_at_1.55.44_PM.jpg'
              }
            />
          </Col>
        ))}
      </Row>
    </Grid>
  );

const UpForTradeScreen = () => {
	const user = userDb[2];
	console.log(user);
	const [searchTerm, setSearchTerm] = useState('');
	return (
		<MDBContainer fluid id="up-for-trade-screen">
			{/* <MDBRow className="grid-no-padding">
        <MDBCol className="grid-no-padding" size="12" xs="12">
          <Navbar />
        </MDBCol>
      </MDBRow> */}
      <MDBRow className="pad-all">
        <MDBCol className="pad-none" size="12" xs="12">
          Up For Trade
        </MDBCol>
      </MDBRow>
      <MDBRow className="pad-bucket">
        <MDBCol size="12" xs="12">
          <Searchbar onChange={e => setSearchTerm(e.target.value)} />
        </MDBCol>
      </MDBRow>

      {productDb
        .filter(
          p =>
            p.user_id === user.user_id &&
            (searchTerm ? p.product_name.includes(searchTerm) : true) &&
            p.up_for_trade
        )
        .map(p => (
          <MDBRow className="pad-bucket-plus">
            <MDBCol className="pad-none" size="12" xs="12">
              <TradeItem
                data={p}
                onClick={() => {}}
                image={
                  "https://i.kym-cdn.com/entries/icons/mobile/000/025/765/Screen_Shot_2018-03-23_at_1.55.44_PM.jpg"
                }
              />
            </MDBCol>
          </MDBRow>
        ))}
    </MDBContainer>
  );
};
export default UpForTradeScreen;
