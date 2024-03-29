import React from "react";
import Noftification from "./Nortification";

const reservedNotifications = [
    {
        id: 1,
        message: "안녕하세요, 오늘의 일정을 알려드립니다."
    },
    {
        id: 2,
        message: "점심식사 시간 입니다."
    },
    {
        id: 3,
        message: "이제 곧 미팅이 시작됩니다."
    },
];

var timer;

class NoftificationList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notification : [],
        };
    }

    componentDidMount() {
        const {notification} = this.state;
        timer = serInterval(() => {
            if(notification.length < reservedNotifications.length) {
                const index = notification.length;
                Noftifications.push(reservedNotifications[index]);
                this.setState({
                    notification: notification,
                });
            } else {
                this.setState({
                    notification: [],
                });
                clearInterval(timer);
            }
            }, 1000);
        }

        componentWillUnmount() {
            if(timer) {
                clearInterval(timer);
            }
        }
    }