import React from "react";
import { SimpleCard } from "matx";
import {
    Button,
    Grid,
    LinearProgress
} from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import LineGraph from '../charts/echarts/LineGraph';


const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
  },
}))(LinearProgress);


class PaginationTable extends React.Component {
  
  //super(props);

  constructor(props){
    super(props);
    this.state = {
      characters: [
          'Chun-Li',
          'Guile',
          'Ryu',
          'Ken',
          'E.Honda',
          'Dhalsim',
      ],
    };
  }

  
  
  render(){
    return (
      <div className="m-sm-30">
        {/* {window.location.pathname} */}
        <Grid container spacing={6}>
          <Grid item lg={9} md={8} sm={12} xs={12}>
              <SimpleCard>
                <h2>Stage Name</h2>
                <p>Strategy description</p>
              </SimpleCard>
          </Grid>
          <Grid item lg={3} md={4} sm={12} xs={12}>
              <SimpleCard>
                <h2>Start Earning</h2>
                <p>Peformance fee: 50%</p>
                <p>Changed every 24 hours on profits</p>
                <Button color="primary" variant="contained" type="submit">START COPY</Button>
              </SimpleCard>
          </Grid>
          <Grid item lg={9} md={8} sm={12} xs={12}>
              <SimpleCard>
                <h2>Total Profit</h2>
                <LineGraph
                  data={[15, 15, 17, 18, 20, 26, 28, 29, 39, 30, 41, 68, 87, 100]}
                  labels={['2021-02-11', '2021-02-12', '2021-02-13', '2021-02-14', '2021-02-15', '2021-02-16', '2021-02-17', '2021-02-18', '2021-02-19', '2021-02-20', '2021-02-21', '2021-02-22', '2021-02-23', '2021-02-24']}
                />
              </SimpleCard>
          </Grid>
          <Grid item lg={3} md={4} sm={12} xs={12}>
              <SimpleCard>
                <h3>Subscription Requirements</h3>
                <p>Trading Type: XBT</p>
                <p>Exchange: Bitmex</p>
                <p>Margin: Cross</p>
                <p>Margin Level: 200+</p>
                <p>Minium Balance: 0.005</p>
              </SimpleCard>
          </Grid>
          <Grid item lg={9} md={8} sm={12} xs={12}>
              <SimpleCard>
                <h3>Profit per period</h3><div className="py-12" />
                <Grid container spacing={6}>
                <Grid item lg={2} md={2} sm={12} xs={12}><span>Total Profit</span></Grid><Grid item lg={9} md={8} sm={12} xs={12}><BorderLinearProgress variant="determinate" value={30} /></Grid><Grid item lg={1} md={2} sm={12} xs={12}><span>30%</span></Grid>
                <Grid item lg={2} md={2} sm={12} xs={12}><span>Last Month</span></Grid><Grid item lg={9} md={8} sm={12} xs={12}><BorderLinearProgress variant="determinate" value={50} lg={9} md={8} sm={12} xs={12} /></Grid><Grid item lg={1} md={2} sm={12} xs={12}><span>50%</span></Grid>
                <Grid item lg={2} md={2} sm={12} xs={12}><span>Last 7 Days</span></Grid><Grid item lg={9} md={8} sm={12} xs={12}><BorderLinearProgress variant="determinate" value={73} lg={9} md={8} sm={12} xs={12} /></Grid><Grid item lg={1} md={2} sm={12} xs={12}><span>73%</span></Grid>
                <Grid item lg={2} md={2} sm={12} xs={12}><span>Last 24 hours</span></Grid><Grid item lg={9} md={8} sm={12} xs={12}><BorderLinearProgress variant="determinate" value={98} lg={9} md={8} sm={12} xs={12} /></Grid><Grid item lg={1} md={2} sm={12} xs={12}><span>98%</span></Grid>
                </Grid>
              </SimpleCard>
          </Grid>
        </Grid>
      </div>
    );
  }
};

export default PaginationTable;

