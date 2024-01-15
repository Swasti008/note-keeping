import Grammar from '../assets/grammarly.png'
import {Component} from 'react'

class edit extends Component{
   constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
        value: ''
    };
   }
   handleChange(e){
    this.setState({value: e.target.value});
   }
   render(){
    return <div className="container">
                <div className="input">
                    <h3>Input</h3>
                    <img src={Grammar} className='img' alt='grammar'
                     onClick= {() => {
                         this.setState({value: ''})
                         document.querySelector('.input-text').value = ''
                        }}/>
                        <textarea className="input-text" onChange={this.handleChange} defaultValue={this.state.value}/>
                    
                </div>
                <div className="output">
                    <h3>Pro Note</h3>
                    <div className="output-text">{this.state.value}</div>
                </div>                
   </div>
   }
}
export default edit