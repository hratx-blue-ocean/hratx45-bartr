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
  const { username, user_id } = useSelector(store => store.userInfo);
  const userItems = useSelector(store => store.userProducts);
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <Grid nopad fluid id="up-for-trade-screen" className="pad-edge-top">
      <Row>
        <Col mobile="12" className="center">
          Up For Trade
        </Col>
      </Row>
      <Row>
        <Col mobile="12">
          <Searchbar onChange={e => setSearchTerm(e.target.value)} />
        </Col>
      </Row>

      <Row>
        {userItems
          .filter(p => p.product_name.includes(searchTerm))
          .map(p => (
            <Col mobile="12" tablet="6" desktop="4">
              <TradeItem data={p} showLoc={false} showDel={true} />
            </Col>
          ))}
      </Row>
    </Grid>
  );
};
export default UpForTradeScreen;
