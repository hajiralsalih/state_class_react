import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBBtn
} from 'mdb-react-ui-kit';

 class Footer extends React.Component {

  render(){
  return (
      <MDBFooter bgColor='light' className='text-center text-lg-left'>
        <br></br>
       <iframe width="1166" height="543" src="https://www.youtube.com/embed/ntocVvAV5aI" 
           title="Ahmed Helmy"/>
      <MDBContainer className='p-4 pb-0'>
        <form action=''>
          <MDBRow className='d-flex justify-content-center'>
            <MDBCol size='auto' className='mb-4 mb-md-0'>
              <span className='pt-2'>
                <strong>سجل للحصول على اخر اخبارنا</strong>
              </span>
            </MDBCol>

            <MDBCol md='5' size='12' className='mb-4 mb-md-0'>
              <MDBInput type='text' id='form5Example2' label='Email address' />
            </MDBCol>

            <MDBCol size='auto' className='mb-4 mb-md-0'>
              <MDBBtn>الإشتراك</MDBBtn>
            </MDBCol>
          </MDBRow>
        </form>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} check point:{' '}
         <span> hajir-alsaleh.com </span>
      </div>
    </MDBFooter>
  );
}
 }
export default Footer