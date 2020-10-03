
import React from "react";
import { Button } from 'antd'
import { FormattedMessage, useIntl } from 'react-intl'



const App = () => {
  const intl = useIntl();

  return <div className="App">
     translate
    {
      intl.formatMessage(
        {
          description: 'A message', // Description should be a string literal
          defaultMessage: 'My name is {name}', // Message should be a string literal
        },
        {
          name: 'aaaa',
        } // Values should be an object literal, but not necessarily every value inside
      )
    }
    <Button type="primary">Button a</Button>
  </div>
}
// class App extends React.Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       go : 'aaa'
//     }
//   }
//   componentDidMount(){
//     this.setState({
//       //go: new Date().valueOf(),
//       here:'aaa'
//     })
//   }
//   render() {
//     const { name } = this.props;
//     return (
//       <>
//         <h1>
//            {name} {this.state.go }aaccddd Mms mccccffaafffaaffffaaa ccafffffffffaa -&gt;{this.state.here}
//            <button onClick={()=>{
//              this.setState({here:'hereffa!'})
//            }}>click m  e </button>
//         </h1>
//       </>
//     );
//   }
// }

export default App;
