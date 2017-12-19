/**
 * Created by zhangxiaojing on 2017/12/12.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchEarningWeekly} from  '../actions/strategy';
import {ROOT_AVATAR} from '../actions/types';

class EarningsWeekly extends Component{
    constructor(props) {
        super(props);
        this.state={
            pageNum:1,
            pageSize:8,
            desc:'weeklyReturn'
        };
    }
    componentWillMount() {
        const pageNum=this.state.pageNum;
        const pageSize=this.state.pageSize;
        const desc=this.state.desc;
        this.props.fetchEarningWeekly({pageSize, pageNum, desc});
    }
    renderList(){
        return this.props.earnings_weekly.map((item, index)=>{
            return(
                <li className="strate-earnings-content-item  strategy-choiceness-item clearfix" key={index} style={{margin:0}}>
                    <div className="col-sm-2">{index+1}</div>
                    <div className="col-sm-8 photo">
                        <img src={`${ROOT_AVATAR}/${item.imageUrl}`} alt=""/>
                        <span className="g-pl-10">{item.loginname}</span>
                    </div>
                    <div className="col-sm-2">
                        {((item.weeklyReturn)*100).toFixed(2)}%
                    </div>
                </li>
            );
        });
    }

    render(){
        if(this.props.earnings_weekly === null){
            return(<div className="text-center h4">loading</div>);
        }
        return(
            <div className="strategy-all-content clearfix">
                <div className="strategy-all-content-filtrate g-py-20">
                    <div className="text-center">您当前暂未上榜</div>
                    <hr/>
                </div>
                <div className="clearfix">
                    <ul className="clearfix">
                        {this.renderList()}
                    </ul>
                </div>
            </div>

        );
    }
}

function mapStateToProps(state) {
    return {
        earnings_weekly:state.strategy.earnings_weekly
    };
}

export default connect(mapStateToProps, {fetchEarningWeekly})(EarningsWeekly);