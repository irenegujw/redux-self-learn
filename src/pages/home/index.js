import React from "react";
import store from "../../store";
import { sendAction } from "../../action";

export default class Home extends React.Component {
  handleClick = () => {
    const action = sendAction();
    store.dispatch(action);
  };

  componentDidMount(){
    store.subscribe(()=>{
      console.log("subscribe: ",store.getState())
      this.setState({});
    })
  };
  render(){
    return(
      <>
        <button onClick={this.handleClick}>click me! </button>
        <div>{store.getState().value}</div>
      </>
    )
  }
}

// function Home(){
//   return(
//     <button onClick={this.handleClick}>
//       click me! 
//     </button>
//   )
// }
// export default Home;