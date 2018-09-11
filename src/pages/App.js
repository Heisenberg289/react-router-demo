import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
    Link
} from 'react-router-dom';
import Home from './home/Home';
import About from './about/About';
import Topics from './topics/Topics';
import '../styles/App.css';

export default class App extends Component {

    constructor(props, context) {
        super(props, context)
        this.changeChild = this.changeChild.bind(this)
    }
    changeChild () {
    }

    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to='/'>首页</Link></li>
                        <li><Link to='/about'>关于</Link></li>
                        <li><Link to='/topics'>主题列表{this.state}</Link></li>
                        <li><button onClick={this.changeChild}>click</button></li>
                    </ul>
                    <hr/>
                    <hr/>
                    <Temp src={1111211} components={[<About/>, <Topics/>]}/>
                    <hr/>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Redirect from="/old-match" to="/"/>
                        <Route path="/about" component={About}/>
                        <Route path="/topics" component={Topics}/>
                        <Route component={Topics}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

class Temp extends  Component{
    constructor() {
        super();
        this.start = this.start.bind(this);
        this.changeFather = this.changeFather.bind(this)
        this.state = {keyWord : true};
    }

    start() {
        this.setState({keyWord : !this.state.keyWord});
    }

    changeFather () {}


    render() {
        return (
            <div>
            <button className="btn btn-lg btn-default" onClick={this.start}>click{this.props.src}</button>
                {
                    this.state.keyWord? <About/>:<Topics/>
                }
                {
                    this.state.keyWord? this.props.components[0]:this.props.components[1]
                }
            </div>
        );
    }

}
