'use client';

import TYRInput from '@/components/TYRInput';
import TYRMainCard from '@/components/TYRMainCard';
import { useFormik } from 'formik';
import { Col, Container, Row } from 'reactstrap';
import * as yup from 'yup';
import CreateFlight, { CreateFlightDTO } from './api/CreateFlight';

export default function CreateFlightPage() {
     const initialValues = {
          flightNumber: '',
          callsign: '',
          date: new Date(),
          depICAO: '',
          arrICAO: '',
          alt1ICAO: '',
          alt2ICAO: '',
     };

     const onSubmit = async (values: CreateFlightDTO) => {
          const response = CreateFlight(values);
     };

     const validationSchema = yup.object({
          flightNumber: yup
               .string()
               .trim()
               .required('Flight Number is required to create new flight!')
               .max(10, 'Please enter a valid flight number!')
               .min(2, 'Please enter a valid flight number!'),
          callsign: yup
               .string()
               .trim()
               .required('Callsign is required to create new flight!')
               .max(10, 'Please enter a valid callsign')
               .min(3, 'Please enter a valid callsign'),
          date: yup.date().required('Flight date is required to create new flight'),
     });

     const formik = useFormik({
          initialValues,
          onSubmit,
     });

     return (
          <>
               <h3>Prepare For Flight</h3>
               <Container fluid>
                    <Row>
                         <Col md={8}>
                              <TYRMainCard>
                                   <h3>Flight Information</h3>
                                   <Container>
                                        <Row>
                                             <Col md={4}>
                                                  <TYRInput
                                                       title={'Flight Number'}
                                                       name={'flightNumber'}
                                                       value={formik.values.flightNumber}
                                                       onChange={formik.handleChange}
                                                       onBlur={formik.handleBlur}
                                                       placeholder={'Required!'}
                                                       type={'text'}
                                                       error={Boolean(formik.values.flightNumber)}
                                                       helperText={formik.errors.flightNumber}
                                                  />
                                             </Col>

                                             <Col md={4}>
                                                  <TYRInput
                                                       title={'Callsign'}
                                                       name={'callsign'}
                                                       value={formik.values.callsign}
                                                       onChange={formik.handleChange}
                                                       onBlur={formik.handleBlur}
                                                       placeholder={'Required!'}
                                                       type={'text'}
                                                       error={Boolean(formik.values.callsign)}
                                                       helperText={formik.errors.callsign}
                                                  />
                                             </Col>

                                             <Col md={4}>
                                                  <TYRInput
                                                       title={'Date'}
                                                       name={'date'}
                                                       value={formik.values.date.toLocaleDateString()}
                                                       onChange={formik.handleChange}
                                                       onBlur={formik.handleBlur}
                                                       placeholder={'Required!'}
                                                       type={'text'}
                                                       error={Boolean(formik.values.date)}
                                                       helperText={formik.errors.date}
                                                  />
                                             </Col>
                                             <Col md={4}>
                                                  <TYRInput
                                                       title={'Departure Airport | ICAO'}
                                                       name={'depICAO'}
                                                       value={formik.values.depICAO}
                                                       onChange={formik.handleChange}
                                                       onBlur={formik.handleBlur}
                                                       placeholder={'Required!'}
                                                       type={'text'}
                                                       error={Boolean(formik.values.depICAO)}
                                                       helperText={formik.errors.depICAO}
                                                  />
                                             </Col>

                                             <Col md={4}>
                                                  <TYRInput
                                                       title={'Arrvival Airport | ICAO'}
                                                       name={'arrICAO'}
                                                       value={formik.values.arrICAO}
                                                       onChange={formik.handleChange}
                                                       onBlur={formik.handleBlur}
                                                       placeholder={'Required!'}
                                                       type={'text'}
                                                       error={Boolean(formik.values.arrICAO)}
                                                       helperText={formik.errors.arrICAO}
                                                  />
                                             </Col>

                                             <Col md={4}>
                                                  <TYRInput
                                                       title={'Alternate Airport | ICAO'}
                                                       name={'alt1ICAO'}
                                                       value={formik.values.alt1ICAO}
                                                       onChange={formik.handleChange}
                                                       onBlur={formik.handleBlur}
                                                       placeholder={'Required!'}
                                                       type={'text'}
                                                       error={Boolean(formik.values.alt1ICAO)}
                                                       helperText={formik.errors.alt1ICAO}
                                                  />
                                             </Col>

                                             <Col md={4}></Col>
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
