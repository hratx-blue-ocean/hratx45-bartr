import React, { Component } from 'react';
import { MDBBtn, MDBContainer, MDBListGroup, MDBRow, MDBCol } from 'mdbreact';
import PastOffer from '../components/PastOffer';
import { connect } from 'react-redux';

const dummyData = [
  {
    Timestamp: Date.now() - Math.random() * 360000,
    Status: 'Offered',
    MessageThreadID: 1,
    Offerer: {
      id: 2,
      items: [
        {
          name: 'used hair',
          value: '2',
          image:
            'https://image.shutterstock.com/image-photo/scrap-hair-after-cutting-barber-260nw-1474957202.jpg'
        },
        {
          name: 'old bike',
          value: '7',
          image:
            'https://www.featurepics.com/StockImage/20081008/old-bike-stock-picture-924047.jpg'
        }
      ]
    },
    Offeree: {
      id: 1,
      items: [
        {
          name: 'McLaren 720S Spider',
          value: '720',
          image:
            'https://cars.mclaren.com/content/dam/mclaren-automotive/models/720s/720s-spider/overview/1920x1080/720s-Spider.jpg'
        }
      ]
    }
  },
  {
    Timestamp: Date.now() - Math.random() * 360000,
    Status: 'Offered',
    MessageThreadID: 2,
    Offerer: {
      id: 2,
      items: [
        {
          name: 'broken doll',
          value: '13',
          image:
            'https://images.fineartamerica.com/images-medium-large-5/broken-doll-katie-victoria-tolley.jpg'
        },
        {
          name: 'competitive hot dog eating mask',
          value: '18',
          image: 'https://pbs.twimg.com/media/Dl5rolBVAAA9cjM.jpg'
        },
        {
          name: 'the rest of this bag of cheetos',
          value: '5',
          image: 'https://i.redd.it/v11q4xffh4y11.jpg'
        }
      ]
    },
    Offeree: {
      id: 1,
      items: [
        {
          name: 'McLaren 720S Spider',
          value: '720',
          image:
            'https://cars.mclaren.com/content/dam/mclaren-automotive/models/720s/720s-spider/overview/1920x1080/720s-Spider.jpg'
        }
      ]
    }
  },
  {
    Timestamp: Date.now() - Math.random() * 360000,
    Status: 'Offered',
    MessageThreadID: 3,
    Offerer: {
      id: 1,
      items: [
        {
          name: 'This friendly gesture',
          value: '0',
          image:
            'https://nationalpostcom.files.wordpress.com/2019/06/flip-2.png?w=780'
        }
      ]
    },
    Offeree: {
      id: 2,
      items: [
        {
          name: 'old bike',
          value: '7',
          image:
            'https://www.featurepics.com/StockImage/20081008/old-bike-stock-picture-924047.jpg'
        }
      ]
    }
  }
];

const dataLayout = {
  offer_id: 'int',
  offerer: 'int',
  offeree: 'int',
  desired_product_id: 'int',
  desired_product_name: 'text',
  desired_product_image: 'image file',
  offered_product_ids: '[]',
  offered_product_names: 'array of text names',
  status: 'pending, accepted, rejected'
};

const dummyData2 = [
  {
    offer_id: 73,
    offerer: 'David',
    offeree: 'Gabe',
    desired_product_id: 1,
    desired_product_image:
      'https://stripedspatula.com/wp-content/uploads/2018/12/homemade-pita-chips-10-500x500.jpg',
    desired_product_name: 'Pita chips',
    offered_product_ids: [1, 2, 3],
    offered_product_names: ['HEB Hot Pie', 'Yeti'],
    status: 'accepted'
  },
  {
    offer_id: 81,
    offerer: 'Collin',
    offeree: 'Ben',
    desired_product_id: 2,
    desired_product_image:
      'https://www.traderjoes.com/TJ_CMS_Content/Images/Digin/Uploads/65556-super-sour-scandinavian-swimmers.jpg',
    desired_product_name: 'Scandinavian Swimmers',
    offered_product_ids: [4, 5, 6],
    offered_product_names: ['Cliff Bar'],
    status: 'rejected'
  },
  {
    offer_id: 102,
    offerer: 'Matt',
    offeree: 'Sam',
    desired_product_id: 3,
    desired_product_image:
      'https://torchystacos.com/wp-content/uploads/damn-good-tacos-min.png',
    desired_product_name: 'Torchys Tacos',
    offered_product_ids: [7, 8, 9],
    offered_product_names: ['Meal pal promo'],
    status: 'accepted'
  }
];

class PastOffersScreen extends Component {
  constructor() {
    super();
    // ! I need offers ID, offerer/offeree, item, status
    this.state = {
      username: '',
      offersIDs: []
    };
  }

  render() {
    return (
      <div className="centered container">
        <MDBContainer fluid id="past-offers">
          {dummyData2.map((item, index) => {
            return <PastOffer item={item} index={index} />;
          })}
        </MDBContainer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { loggedInUserInfo } = state;
  return { loggedInUserInfo };
};

export default connect(mapStateToProps, {})(PastOffersScreen);
