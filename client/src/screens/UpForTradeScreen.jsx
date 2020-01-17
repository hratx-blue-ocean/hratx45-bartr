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
};
export default UpForTradeScreen;
