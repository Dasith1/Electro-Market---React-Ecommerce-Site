import React , {useState}from 'react'
import { Container,Row,Col,Form,FormGroup } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../style/login.css'
import { createUserWithEmailAndPassword , updateProfile} from 'firebase/auth';
import { ref, uploadBytesResumable,getDownloadURL} from 'firebase/storage'

import {auth} from '../firebase.config';
import { setDoc ,doc} from 'firebase/firestore';
import { storage } from '../firebase.config';
import {db} from '../firebase.config'
import { toast } from 'react-toastify';

import { useNavigate } from 'react-router-dom';

function Signup() {

  const[username,setUsername ] =useState('')
  const[email,setEmail] =useState('')
  const[password,setPassword]=useState('')
  const[file,setFile]=useState(null)
  const[loading,setLoading]= useState(false);

  const navigate =useNavigate();

  const signup =async(e)=>{
    e.preventDefault()
    setLoading(true)
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const storageRef = ref(storage, `images/${Date.now()}_${username}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        
        (error) => {
         
          toast.error(error.message);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          await updateProfile(user, {
            displayName: username,
            photoURL: downloadURL,
          });

          //store user data in firestore
          await setDoc(doc(db, 'users', user.uid), {
            uid: user.uid,
            displayName: username,
            email,
            photoURL: downloadURL,
          });
           
        }
      );

      setLoading(false)
      toast.success('Account Created Successfully!')
      navigate('/login')
    } catch (error) {
      setLoading(false)
      toast.error(error.message);
    }
  }

  return (
    <>
    <section>
      <Container>
        <Row>
        {
          loading? <Col lg='12' className='text-center'><h6 
          className='fw-bold'>Loading....</h6> </Col> :
          <Col lg ='6' className='m-auto text-center' >
          <h3 className='fw-bold mb-4'>Signup</h3>

        <Form className="auth__form" onSubmit={signup} >
        <FormGroup className='form__group'>
            <input type='text'placeholder='Username'value={username} onChange={e=>setUsername(e.target.value)}  ></input>
          </FormGroup>
          <FormGroup className='form__group'>
            <input type='email'placeholder='Enter your email'value={email} onChange={e=>setEmail(e.target.value)}  ></input>
          </FormGroup>
          <FormGroup className='form__group'>
            <input type='password'placeholder='Enter your password' value={password} onChange={e=>setPassword(e.target.value)}></input>
          </FormGroup>
          <FormGroup className='form__group'>
            <input type='file' onChange={e=>setFile(e.target.files[0])}></input>
          </FormGroup>

          <button type='submit' className='buy__btn auth__btn'>Signup</button>
          <p>Already have an account?<Link to='/login'>Login</Link>  </p>
        </Form>

        </Col>
        }
        </Row>
      </Container>
    </section>



    </>
  )
}

export default Signup
