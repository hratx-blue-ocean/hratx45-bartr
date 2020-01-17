import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Link, useHistory } from 'react-router-dom';
import {
  Grid,
  Row,
  Col,
  Card,
  Button,
  Icon
} from '../components/CustomComponents';
import { MDBPopover, MDBPopoverBody, MDBPopoverHeader, MDBBtn } from 'mdbreact';
import '../assets/styles/theme.scss';

/**
 * Container for holing trade item
 * @param {object} data - All item's data as an object
 * @param {boolean} showLoc - SHow the Location if item
 * @param {boolean} showDel - Show the delete item button (for own items)
 */
const TradeItem = ({
  className = '',
  data,
  onClick,
  onDelete,
  image,
  showLoc = true,
  showDel = true
}) => {
  const [delOpen, setDelOpen] = useState(false);
  const {
    product_id,
    user_id,
    category_id,
    product_name,
    value,
    up_for_trade
  } = data;
  const location = 'Austin, TX';
  const contentSize = showDel ? '6' : '8';
  return (
    <Card className={className}>
      <Row nopad className="pad-none">
        <Col nopad className="pad-none" mobile="4">
          <img
            src={image}
            className="image-fit-clip rounded clip-half shadow "
            alt={data.product_name}
          />
        </Col>
        <Col nopad mobile={contentSize} className="pad-none">
          <Row nopad className="pad-none">
            <Col nopad className="pad-edge-top-half" mobile="12">
              {product_name}
            </Col>
          </Row>
          <Row nopad className="pad-none">
            <Col nopad className="pad-edge-top-half" mobile="12">
              Value: {value}
            </Col>
          </Row>
          {!showLoc ? (
            <Row nopad className="pad-none">
              <Col nopad className="pad-edge-top-half" mobile="12">
                Location: {location}
              </Col>
            </Row>
          ) : (
            ''
          )}
        </Col>
        {showDel ? (
          <Col nopad mobile="2" className="center pad-all-half">
            <MDBPopover
              color="default"
              placement="left"
              popover
              // isVisible={delOpen}
            >
              <MDBBtn
                style={{ margin: '0' }}
                className="pad-all-half fill color-none "
                color="default"
              >
                <Icon
                  className="color-inherit"
                  far
                  icon="times-circle"
                  size="3x"
                />
              </MDBBtn>
              <MDBPopoverBody color="default" className="color-default">
                YES YES YES YES YES
              </MDBPopoverBody>
            </MDBPopover>
          </Col>
        ) : (
          ''
        )}
      </Row>
    </Card>
  );
};
export default TradeItem;
