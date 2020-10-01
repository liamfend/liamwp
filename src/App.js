
import React  from "react"; 
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      go : 'aaa'
    }
  }
  componentDidMount(){
    this.setState({
      //go: new Date().valueOf(),
      here:'aaa'
    })
  }
  render() {
    const { name } = this.props;
    return (
      <>
        <h1>
           {name} {this.state.go } mmmccccfffffffffffffff -&gt;{this.state.here}
           <button onClick={()=>{
             this.setState({here:'hereffa!'})
           }}>click me </button>
        </h1>
      </>
    );
  }
}

export default   App ;
