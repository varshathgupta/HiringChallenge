import React,{useState} from 'react'
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table'
import ar from '../../images/arRahuman.jpeg'
import ani from '../../images/aniruth.jpg'
import dsp from '../../images/dsp.jpg'
import { Rating } from 'react-simple-star-rating'
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function home() {

  const songsHeader=[
    "Artwork","Song","Date of Release","Artists", "Rating"
]
  const songsBio =[
          {
          
          "artwork":ar,
          "song":"Munbe va",
          "dor":"July 21,2009",
          "artists":"Ar Rahuman",
          "rating": 5

      },
      {
        
          "artwork":ani,
          "song":"Once upon a time",
          "dor":"May 20,2022",
          "artists":"Aniruth",
          "rating":3
          
          },
      {
              
              "artwork": dsp,
              "song":"Bullet Song",
              "dor":"May 10 ,2022",
              "artists":"Devisri prasad",
              "rating":4
              
              },
              {
                "artwork":ar,
                "song": "Hosanna",
                "dor":"June 15,2009",
                "artists":"Ar Rahuman",
                "rating":5
              }
      ]
      const artistHead =["ArtistName","Date of Birth","Songs"]
      const artishData =[
        {
          "artistName": "Ar Rahuman",
          "dob":" January 6, 1967",
          "songs":"Munbe va,Hosanna"
        },
        {
          "artistName": "Aniruth",
          "dob":" October 16, 1990",
          "songs":"Once upon a time"
        },
        {
          "artistName": "Devisri prasad",
          "dob":" August 2, 1979",
          "songs":"Bullet Song"
        },
      ]
      const [addSong, setAddSong] = useState(false);

      const handleClose = () => setAddSong(false);
      const handleShow = () => setAddSong(true);
  
  return (
  
      <Container>
            <div className="d-flex justify-content-between mt-5 mb-5"> 
            <h1 className="font-weight-bold text-secondary">Top 10 Songs</h1>
            <button className="btn btn-secondary" onClick={handleShow}>+ Add Song</button>
            </div>
            <Modal show={addSong} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Add a new song</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Song Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Song name" 
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"   
                  >
                    <Form.Label>Date of Release</Form.Label>
                    <Form.Control
                      type="date"
                      placeholder="Enter date of release" 
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"   
                  >
                    <Form.Label>Art Work</Form.Label>
                    <Form.Control
                      type="file"
                      placeholder="upload Art Work" 
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"   
                  >
                    <Form.Label>Artist</Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option>Search</option>
                      <option value="1">Ar Rahuman</option>
                      <option value="2">Aniruth</option>
                      <option value="3">Devisri Prasad</option>
                  </Form.Select>
                  <Button className="mt-2" variant="secondary">+ Add Artist</Button>
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save 
                </Button>
              </Modal.Footer>
            </Modal>
            <Table striped bordered hover size="sm" >
              <thead >
                {
                  songsHeader.map((head)=>
                    (  
                  <th className="px-5 py-5">{head}</th>
                    )  )
                } 
              </thead>
              <tbody>            
                  {songsBio.map((columns,index)=>(
                    <tr  key={index}>
                      <td className="px-5 py-2"><img style={{width:"100px", height:"100px"}} src={columns.artwork}/></td>
                      <td className="px-5 py-5">{columns.song}</td>
                      <td className="px-5 py-5">{columns.dor}</td>
                      <td className="px-5 py-5">{columns.artists}</td>
                      <td className="px-5 py-5">{<Rating  ratingValue={columns.rating}  />}</td>

                  </ tr>
                  ))}              
              </tbody>
          </Table>
          <h1 className="font-weight-bold text-secondary mt-5 mb-5">Top 10 Artists</h1>
          <Table striped bordered   >
            <thead>
              {artistHead.map((arthead)=>(
                <th className="px-5 py-5">{arthead}</th>
              ))}
            </thead>
            <tbody>
              {artishData.map((artistdetail,index)=>(
                <tr key={index}>
                  <td className="px-5 py-5">{artistdetail.artistName}</td>
                  <td className="px-5 py-5">{artistdetail.dob}</td>
                  <td className="px-5 py-5">{artistdetail.songs}</td>
                </tr>
              ))}
            </tbody>
            
          </Table>
        
      </Container>
      
    
  )
}

export default home