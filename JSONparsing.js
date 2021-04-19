import './App.css';
import React,{ Component } from 'react'

class Json extends Component{
  state=
  {
    loading:true,
    TotalCase:null,
    ActiveCase:null,
    recovered:null,
    deaths:null,
    prevdaytest:null,
    lastupdate:null
  };
  async componentDidMount()
  {
    const url="https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true";
    const res=await fetch(url);
    const data=await res.json();
    console.log(data.totalCases);
    this.setState({TotalCase:data.totalCases,loading:false});
    this.setState({ActiveCase:data.activeCases,loading:false});
    this.setState({recovered:data.recovered,loading:false});
    this.setState({deaths:data.deaths,loading:false});
    this.setState({prevdaytest:data.previousDayTests,loading:false});
    this.setState({lastupdate:data.lastUpdatedAtApify,loading:false});
  }
  render()
  {
    if(this.state.loading){
      return <div>loading.....</div>;
    }
    if(!this.state.TotalCase)
    {
      return <div>Didn't get data</div>;
    }
    return(
    <div>
      <div class="App-header">Covid Updates</div>
      <div><b>Total Cases : </b>{this.state.TotalCase}</div>
      <div><b>Active Cases : </b>{this.state.ActiveCase}</div>
      <div><b>Recovered Cases : </b>{this.state.recovered}</div>
      <div><b>Deaths : </b>{this.state.deaths}</div>
      <div><b>Previous Day Test : </b>{this.state.prevdaytest}</div>
      <div><b>Last Update : </b>{this.state.lastupdate}</div>
    </div>
    );
};
}
export default Json;
