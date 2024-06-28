import React, {useContext} from "react";
import { NewsDataContext } from "./Api_dataContext";
import { Card, CardLink, CardText, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import {faSpinner} from "@fortawesome/free-solid-svg-icons"
import { Link, useParams } from "react-router-dom";


export default function LoadNews(props){
    const newsData = useContext(NewsDataContext);
    return(
        <Container className="mt-2 pb-4">
            <h1 className="newsTopic d-flex justify-content-center p-2">{props.topic} News</h1>
            {newsData ? (
                <Row xs={1} md={3} className="g-4">
                    {newsData.data.slice(0, 9).map((value, i)=>(
                        <Col key={i} className="mt-4 d-flex">
                            <Card id="multiCard">
                                <Card.Img id="multiImg" variant="top" src={value.imageUrl} />
                                <Card.Body className="pb-0">
                                    <Card.Title id="title" className="mb-2">{value.title}</Card.Title>
                                    <CardText className="dateTime mb-3"><FontAwesomeIcon icon={faCalendar} /> {value.date} , {value.time}</CardText>
                                    <Card.Text className="content mb-3">{value.content.length > 140 ? value.content.substring(0, 140) + '...' : value.content}</Card.Text>
                                </Card.Body>
                                <Card.Body id="readMoreContainer" className="pt-0 pb-2">
                                    <CardLink as={Link} to={`/${newsData.category}/${i}`} id="readMore" className="btn btn-news mt-1 p-0">Read More</CardLink>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            ): (<div className="loading">
                    <FontAwesomeIcon className="loadIcon" icon={faSpinner} /> <br />
                    <p className="loadText">Loading</p>
                </div>)}
        </Container>
    );
};

function MoreContent(){
    const {id} = useParams();
    const newsData = useContext(NewsDataContext);
    return(
        <>
            {newsData ? (
                <Container className="mt-2 d-flex justify-content-center">
                    <Card id="singleCard">
                        <Card.Header id="singleHead">
                            <Card.Text id="singleTitle">{newsData.data[id].title}</Card.Text>
                        </Card.Header>
                        <div id="divImg" className="mt-2">
                            <Card.Img id="singleImage" variant="top" src={newsData.data[id].imageUrl} />
                        </div>
                        <Card.Body id="singleBody d-flex justify-content-center">
                            <Card.Text id="singleContent">{newsData.data[id].content}</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Card.Text id="singleDate" className="">This article was Published on {newsData.data[id].date} at {newsData.data[id].time}.</Card.Text>
                        </Card.Footer>
                    </Card>
                </Container>
            ) : (
                <div className="loading">
                    <FontAwesomeIcon className="loadIcon" icon={faSpinner} /> <br />
                    <p className="loadText">Loading</p>
                </div>
            )}
        </>
    );
}

export {MoreContent};