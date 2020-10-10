import React, { useState } from 'react'
import { Button, DatePicker } from 'antd'
import { FormattedMessage, useIntl } from 'react-intl'

const App = () => {
  const intl = useIntl()
  const data = {
    isloading: false
    // payload: {
    //   student: {
    //     firstName: 'f',
    //     lastName: 'l'
    //   },
    //   area: {
    //     name: ''
    //   }
    // }
  }
  return (
    <div className='App'>
      student name is {data?.payload?.student?.firstName || 'li'}
      {intl.formatMessage(
        {
          description: 'A message', // Description should be a string literal
          defaultMessage: 'My name is {name}'
        },
        {
          name: 'aaaa dsa '
        } // Values should be an object literal, but not necessarily every value inside
      )}
      <Button type='primary'>Button a</Button>
      <div>
        dsafsaf
        <span>
          sssssssssssssaaaa
          <div>
            dsafdsa<span>dsafdsafsf</span>
          </div>
        </span>
      </div>
      <DatePicker.RangePicker />
    </div>
  )
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

export default App
