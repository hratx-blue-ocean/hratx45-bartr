import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MDBContainer, MDBCol, MDBRow } from 'mdbreact';
// import Navbar from '../components/Navbar';
import userDb from '../dummy_data/users';
import productDb from '../dummy_data/products';
import Searchbar from '../components/Searchbar';
import '../assets/styles/grid.scss';

const UpForTradeScreen = () => {
  const user = useSelector(store => store.user);
  console.log(user);
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <MDBContainer fluid id="up-for-trade-screen">
      {/* <MDBRow className="grid-no-padding">
        <MDBCol className="grid-no-padding" size="12" xs="12">
          <Navbar />
        </MDBCol>
      </MDBRow> */}
      <MDBRow>
        <MDBCol className="center-contents" size="12" xs="12">
          Up For Trade
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol size="12" xs="12">
          <Searchbar onChange={e => setSearchTerm(e.target.value)} />
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol className="center-contents" size="12" xs="12">
          {productDb
            .filter(
              p =>
                p.user_id === user.user_id &&
                (searchTerm ? p.product_name.includes(searchTerm) : true) &&
                p.up_for_trade
            )
            .map(p => (
              <div key={p.product_id}>
                {`ID: ${p.product_id}\nName: ${p.product_name}\nValue: ${p.value}\nUpForTrad: ${p.up_for_trade}\nImage: `}
                <img
                  src="https://i.kym-cdn.com/entries/icons/mobile/000/025/765/Screen_Shot_2018-03-23_at_1.55.44_PM.jpg"
                  style={{ height: '5rem', width: 'auto' }}
                />
              </div>
            ))}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
export default UpForTradeScreen;
