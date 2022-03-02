import React from 'react';
import Calendar from './Calender'

class App extends React.Component {
        constructor(props){

                super(props);
                this.state = {
                        date:Date.now(),
                        selectionStart: 0,
                        selectionEnd: 0
                }
        }

        prevMonth(){
                let date = new Date(this.state.date);
                date.setMonth(date.getMonth() - 1);
                this.setState({date:date.getTime()});
        }

        nextMonth(){
                let date = new Date(this.state.date);
                date.setMonth(date.getMonth() + 1);
                this.setState({date:date.getTime()});
        }

        setRange(selectionStart = 0, selectionEnd = 0){
                this.setState({selectionStart, selectionEnd});
        }

        render(){

                let {date, selectionStart, selectionEnd} = this.state;

                return (
                        <div className="calendar">




                                <Calendar date={date}
                                        indexStart = {selectionStart}
                                        indexEnd = {selectionEnd}
                                />
                        </div>
                        )
        }
}

export default App;