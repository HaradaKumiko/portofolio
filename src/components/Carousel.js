import React, { Component } from 'react';
import Card from './Card';
import { Col, Container, Row, Jumbotron } from 'react-bootstrap';
import shinobu from '../assetss/images/shinobu.jpg';
import senku from '../assetss/images/senku.jpg';
import tomioka from '../assetss/images/tomioka.jpg';

class Carousel extends Component{
    constructor(props){
        super(props)
        this.state = {
            items:[
                {
                    id: 0,
                    title: 'Todolist',
                    subtitle: 'Todolist from react',
                    imgsrc: shinobu,
                    link: 'https://github.com/HaradaKumiko',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Landingpage Hotspot Mikrotik',
                    subtitle: 'Landingpage Hotspot Hotspot',
                    imgsrc: senku,
                    link: 'https://github.com/HaradaKumiko',
                    selected: false
                },                {
                    id: 2,
                    title: 'tomioka',
                    subtitle: 'tomioka',
                    imgsrc: tomioka,
                    link: 'https://github.com/HaradaKumiko',
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id){
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) =>{
        return items.map(item => {
            return <Card item={item} click={(e) => this.handleCardClick(item.id, e)} key={item.id} />
        })
    }

    render(){
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }
}

export default Carousel