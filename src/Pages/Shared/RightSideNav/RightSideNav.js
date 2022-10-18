import React from 'react';
import { FaGoogle, FaGithub, FaFacebookMessenger, FaFacebook, FaYoutube, FaTwitterSquare, FaWhatsappSquare, FaDiscord, FaFingerprint, FaReadme } from 'react-icons/fa';
import { Button, ButtonGroup, ListGroup } from 'react-bootstrap';
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightSideNav = () => {
    return (
        <div className=''>
            <ButtonGroup vertical>
                <Button className='mb-3' variant="outline-primary"><FaGoogle></FaGoogle> Sign In With Google</Button>
                <Button className='mb-3' variant="outline-secondary"><FaGithub></FaGithub> Sign in With Github</Button>
                <Button className='mb-3' variant="outline-secondary"><FaFacebookMessenger></FaFacebookMessenger> Sign in With Facebook</Button>
            </ButtonGroup>
            <div>
                <h4>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook/> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaYoutube></FaYoutube> Youtube</ListGroup.Item>
                    <ListGroup.Item><FaTwitterSquare></FaTwitterSquare> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaWhatsappSquare></FaWhatsappSquare> Whatsapp</ListGroup.Item>
                    <ListGroup.Item><FaDiscord></FaDiscord> Discord</ListGroup.Item>
                    <ListGroup.Item><FaFingerprint></FaFingerprint> Privacy Policy</ListGroup.Item>
                    <ListGroup.Item><FaReadme></FaReadme> Trams and Condition</ListGroup.Item>
                </ListGroup>
            </div>
        <div className='mt-5'>
        <BrandCarousel></BrandCarousel>
        </div>
        </div>
    );
};

export default RightSideNav;