import React, { useState } from 'react';
// Import Components from MDB
import { MDBContainer, MDBCol, MDBRow, MDBBtn } from 'mdbreact';
// Import custom components
import TradeItem from '../../components/TradeItem';
import {
  Grid,
  Row,
  Col,
  Button,
  Card,
  AutoGrid
} from '../../components/CustomComponents';
import '../../assets/styles/theme.scss';

const ThemeSandbox = () => {
  return (
    <Grid className="pad-edge-top">
      {/* Insert test components here */}
      <Row>
        <Col mobile="4" tablet="2" desktop="1">
          <Button color="danger" className="fill">
            Danger Rounded
          </Button>
        </Col>
        <Col mobile="4" tablet="2" desktop="1">
          <Button color="danger" className="fill shadow">
            Danger Rounded Shadow
          </Button>
        </Col>
        <Col mobile="4" tablet="2" desktop="1">
          <Button
            color="danger"
            className="fill border color-border-danger-lite"
          >
            Danger Rounded Border-Lite
          </Button>
        </Col>
        <Col mobile="4" tablet="2" desktop="1">
          <Button color="warning" className="rounded-extra fill">
            Warning Rounded-Extra
          </Button>
        </Col>
        <Col mobile="4" tablet="2" desktop="1">
          <Button color="warning" className="rounded-extra fill shadow">
            Warning Rounded-Extra Shadow
          </Button>
        </Col>
        <Col mobile="4" tablet="2" desktop="1">
          <Button
            color="warning"
            className="rounded-extra fill border color-border-warning-lite"
          >
            Warning Rounded-Extra Border-Lite
          </Button>
        </Col>
        <Col mobile="4" tablet="2" desktop="1">
          <Button color="default" className="rounded-large fill">
            Default Rounded-Large
          </Button>
        </Col>
        <Col mobile="4" tablet="2" desktop="1">
          <Button color="default" className="rounded-large fill shadow">
            Default Rounded-Large Shadow
          </Button>
        </Col>
        <Col mobile="4" tablet="2" desktop="1">
          <Button
            color="default"
            className="rounded-large fill border color-border-default-lite"
          >
            Default Rounded-Large Border-Lite
          </Button>
        </Col>
        <Col mobile="4" tablet="2" desktop="1">
          <Button color="danger" className="rounded-super fill">
            Danger Rounded-Super
          </Button>
        </Col>
        <Col mobile="4" tablet="2" desktop="1">
          <Button color="danger" className="rounded-super fill shadow-heavy">
            Danger Rounded-Super Shadow-Heavy
          </Button>
        </Col>
        <Col mobile="4" tablet="2" desktop="1">
          <Button
            color="danger"
            className="rounded-super fill border color-border-danger-dark"
          >
            Danger Rounded-Super Border-Dark
          </Button>
        </Col>
        <Col mobile="4" tablet="2" desktop="1">
          <Button color="warning" className="rounded-pill fill">
            Warning Rounded-Pill
          </Button>
        </Col>
        <Col mobile="4" tablet="2" desktop="1">
          <Button color="warning" className="rounded-pill fill shadow-heavy">
            Warning Rounded-Pill Shadow-Heavy
          </Button>
        </Col>
        <Col mobile="4" tablet="2" desktop="1">
          <Button
            color="warning"
            className="rounded-pill fill border color-border-warning-dark"
          >
            Warning Rounded-Pill Border-Dark
          </Button>
        </Col>
        <Col mobile="4" tablet="2" desktop="1">
          <Button color="default" className="rounded-ball fill">
            default Rounded-Ball
          </Button>
        </Col>
        <Col mobile="4" tablet="2" desktop="1">
          <Button color="default" className="rounded-ball fill shadow-heavy">
            default Rounded-Ball Shadow-Heavy
          </Button>
        </Col>
        <Col mobile="4" tablet="2" desktop="1">
          <Button
            color="default"
            className="rounded-ball fill border color-border-default-dark"
          >
            default Rounded-Ball Border-Dark
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          TradeItem (own item)
          <TradeItem
            data={{
              product_id: 100,
              user_id: 777,
              category_id: 4,
              product_name: 'McLaren 720S Spider',
              value: 720,
              up_for_trade: true
            }}
            image={
              'https://cars.mclaren.com/content/dam/mclaren-automotive/models/720s/720s-spider/overview/1920x1080/720s-Spider.jpg'
            }
            showDelete={true}
            ownItem={false}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          TradeItem (other item)
          <TradeItem
            data={{
              product_id: 100,
              user_id: 777,
              category_id: 4,
              product_name: 'McLaren 720S Spider',
              value: 720,
              up_for_trade: true
            }}
            image={
              'https://cars.mclaren.com/content/dam/mclaren-automotive/models/720s/720s-spider/overview/1920x1080/720s-Spider.jpg'
            }
            showDelete={false}
            ownItem={false}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <AutoGrid
              className="pad-edge-top"
              mobile="12"
              tablet="4"
              desktop="1"
            >
              <div>AutoGridCell 1</div>
              <div>AutoGridCell 2</div>
              <div>AutoGridCell 3</div>
              <div>AutoGridCell 4</div>
              <div>AutoGridCell 5</div>
              <div>AutoGridCell 6</div>
              <div>AutoGridCell 7</div>
              <div>AutoGridCell 8</div>
              <div>AutoGridCell 9</div>
              <div>AutoGridCell 10</div>
              <div>AutoGridCell 11</div>
              <div>AutoGridCell 12</div>
            </AutoGrid>
          </Card>
        </Col>
      </Row>
    </Grid>
  );
};
export default ThemeSandbox;
