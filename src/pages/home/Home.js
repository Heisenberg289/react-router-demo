/**
 * Created by mapbar_front on 2018/3/18.
 */
import React,{ Component} from 'react';
import emitter from "./../../ev/event"


export default class Home extends Component{
    constructor() {
        super()
        this.state = {
            flag: true
        }
    }
    changeChild () {
        this.setState({
            flag: !this.state.flag
        })
    }
    componentDidMount(){
        // 声明一个自定义事件
        // 在组件装载完成以后
        this.eventEmitter = emitter.addListener("callMe",(msg)=>{
            this.changeChild()
        });
    }
    // 组件销毁前移除事件监听
    componentWillUnmount(){
        emitter.removeListener(this.eventEmitter);
    }


    render(){
        return (
            <div>
                <hr/>
                {
                    this.state.flag?<p>状态1</p>:<p>状态2</p>
                }
                <button onClick={this.changeChild.bind(this)}>Father</button>
                <Child flag={this.state.flag}/>
            </div>
        )
    }
}

 class  Child extends Component{
    constructor () {
        super()
        this.changeFather = this.changeFather.bind(this)
    }
     changeFather() {
         emitter.emit("callMe","Hello")
     }

     render() {
         return (
             <div>
                 {
                     this.props.flag?<p>状态1</p>:<p>状态2</p>
                 }
                 <button onClick={this.changeFather}>Child</button>
             </div>
         );
     }

 }