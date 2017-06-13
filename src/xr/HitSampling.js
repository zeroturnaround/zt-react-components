import moment from "moment";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: inline-block;
    position: absolute;
    right: 20px;
    top: 0.5px;
    font-size: 11px;
    color: #929fa4;
    font-family: Helvetica;

    .time {
        color: #5c6a70;
    }
`;

const TIME_FORMAT = "HH:mm:ss";

export default ({similarHitCount, periodStart, periodEnd, right, top}) => (
    <Container style={{top, right}}>
        {similarHitCount} similar {similarHitCount === 1 ? "hit" : "hits"}&ensp;
        <span className="time">{ moment(periodStart).format(TIME_FORMAT) } - { moment(periodEnd).format(TIME_FORMAT) }</span>
    </Container>
);
