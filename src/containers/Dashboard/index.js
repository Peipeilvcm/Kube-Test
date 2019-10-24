import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
import SideBar from 'components/SideBar';
// import PostList from 'components/PostList';
import Header from 'components/Header';
// import * as DashboardActions from './actions';
// import { Button } from 'antd';
import siteConfig from 'siteConfig';
import './style.css';
import GoBack from 'components/GoBack';

import ChartistGraph from "react-chartist";
import { Grid, Row, Col } from "react-bootstrap";
import { Card } from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import {
  dataPie,
  legendPie,
  dataSales,
  optionsSales,
  responsiveSales,
  legendSales,
  // dataBar,
  // optionsBar,
  // responsiveBar,
  // legendBar
} from "variables/Variables.jsx";


export default class Dashboard extends Component {
  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }


  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {

  }


  render() {

    const navList = [
      {
        linkTo: '/dashboard',
        tag: `Dashboard`
      },
      {
        linkTo: '/',
        tag: `CI Report List（12）`,
      },
      {"tag":"app-pod-failure","count":1},{"tag":"network-delay","count":1},{"tag":"pod-delete","count":1},
    ];
    

    return (
      <div className="page-container">
        <SideBar data={siteConfig} />
        <div className="post-list">
        <Header data={navList} activeTag={`Dashboard`} />

        <section id="posts">
          <GoBack />
          <div className="content">
            <Grid fluid>
              <Row>
                <Col lg={3} sm={6}>
                  <StatsCard
                    bigIcon={<i className="pe-7s-server text-warning" />}
                    statsText="CI count"
                    statsValue="10 times"
                    statsIcon={<i className="fa fa-refresh" />}
                    statsIconText="Updated now"
                  />
                </Col>
                <Col lg={3} sm={6}>
                  <StatsCard
                    bigIcon={<i className="pe-7s-wallet text-success" />}
                    statsText="Successes"
                    statsValue="8 times"
                    statsIcon={<i className="fa fa-calendar-o" />}
                    statsIconText="Last day"
                  />
                </Col>
                <Col lg={3} sm={6}>
                  <StatsCard
                    bigIcon={<i className="pe-7s-graph1 text-danger" />}
                    statsText="Errors"
                    statsValue="2 times"
                    statsIcon={<i className="fa fa-clock-o" />}
                    statsIconText="In the last hour"
                  />
                </Col>
                <Col lg={3} sm={6}>
                  <StatsCard
                    bigIcon={<i className="fa fa-twitter text-info" />}
                    statsText="Total time cost"
                    statsValue="21.2 mins"
                    statsIcon={<i className="fa fa-refresh" />}
                    statsIconText="Updated now"
                  />
                </Col>
              </Row>
              <Row>
                <Col md={8}>
                  <Card
                    statsIcon="fa fa-history"
                    id="chartHours"
                    title="CI History"
                    category="10 recent results"
                    stats="Updated 3 minutes ago"
                    content={
                      <div className="ct-chart">
                        <ChartistGraph
                          data={dataSales}
                          type="Line"
                          options={optionsSales}
                          responsiveOptions={responsiveSales}
                        />
                      </div>
                    }
                    legend={
                      <div className="legend">{this.createLegend(legendSales)}</div>
                    }
                  />
                </Col>
                <Col md={4}>
                  <Card
                    statsIcon="fa fa-clock-o"
                    title="CI Report Statistics"
                    category="Total Results"
                    stats="Campaign sent 2 days ago"
                    content={
                      <div
                        id="chartPreferences"
                        className="ct-chart ct-perfect-fourth"
                      >
                        <ChartistGraph data={dataPie} type="Pie" />
                      </div>
                    }
                    legend={
                      <div className="legend">{this.createLegend(legendPie)}</div>
                    }
                  />
                </Col>
              </Row>
            </Grid>
          </div>

        </section>
        </div>
      </div>
    );
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
