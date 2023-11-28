import TYRInput from '@/components/TYRInput';
import TYRMainCard from '@/components/TYRMainCard';
import { Col, Container, Row } from 'reactstrap';

export default function CreateFlight() {
     return (
          <>
               <h3>Flight Planning</h3>
               <Container fluid>
                    <Row>
                         <Col md={8}>
                              <TYRMainCard>
                                   <h3>Flight Information</h3>
                                   <Container>
                                        <Row>
                                             <Col md={3}>
                                                  <TYRInput
                                                       title={'Flight Number'}
                                                       name={''}
                                                       value={'test'}
                                                       placeholder={'Flight Number'}
                                                       type={'number'}
                                                  />
                                             </Col>
                                             <Col md={3}></Col>
                                             <Col md={3}></Col>
                                             <Col md={3}></Col>
                                        </Row>
                                   </Container>
                              </TYRMainCard>
                         </Col>
                         <Col md={4}>
                              <TYRMainCard>
                                   <h3>Flight Information</h3>
                              </TYRMainCard>
                         </Col>
                    </Row>
               </Container>
          </>
     );
}
