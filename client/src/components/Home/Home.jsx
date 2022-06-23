import React,{useState} from 'react'
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table'
import { Rating } from 'react-simple-star-rating'
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Axios from 'axios'

function home() {
  const[song,setSong]= useState("")
  const[rating,setRating]= useState(0)
  const[dor,setDoR]=useState(new Date())
  const[dob,setDoB]=useState(new Date())
  const[artistName,setArtistName]= useState("")
  const[selectArtist,setSelectArtist]=useState("")
  const[artwork,setArtWork]= useState(null)
  const[bio,setBio]=useState("")
  const [addSong, setAddSong] = useState(false);
  const [addArtist, setAddArtist] = useState(false);
  const handleClose = () => setAddSong(false);
  const handleShow = () => setAddSong(true);
  const handleCloseArtist =()=>setAddArtist(false);
  const handleShowArtist =()=>setAddArtist(true);

  const [songList, setSongList] = useState([]);
  const [artistList,setArtistList]= useState([]);
                                                                               // Api for adding data to database
  const addSongList = () => {
    Axios.post("http://localhost:3001/create", {
      song: song,
      dor: dor,
      artistName: artistName,
      artwork: artwork,
      selectArtist:selectArtist
      
    }).then(() => {
      setSongList([
        ...songList,
        {
          song: song,
          dor: dor,
          artistName: artistName,
          artwork: artwork,
          selectArtist:selectArtist
        },
      ]);
    });
  };
  const addArtistList =()=>{
    Axios.post("http://localhost:3001/create", {
     
      artistName: artistName,
      dob:dob,
      bio:bio
      
    }).then(() => {
      setArtistList([
        ...artistList,
        {
          artistName: artistName,
      dob:dob,
      bio:bio
        },
      ]);
    });
  }
                                                                // Api get request
  const getSongs = () => {
    Axios.get("http://localhost:3001/songs").then((response) => {
      setSongList(response.data);
    });
  };
  const getArtist = () => {
    Axios.get("http://localhost:3001/artists").then((response) => {
      setArtistList(response.data);
    });
  };

   
    
      
      const songsHeader=["Artwork","Song","Date of Release","Artists", "Rating" ]     //Table Headings
      const artistHead =["ArtistName","Date of Birth","Songs"]

  
  return (
  
      <Container>
            <div className="d-flex justify-content-between mt-5 mb-5"> 
            <h1 className="font-weight-bold text-secondary">Top 10 Songs</h1>
            <button className="btn btn-secondary" onClick={handleShow}>+ Add Song</button>
            </div>
                                                                              {/* Add Songs Modal beignins */}
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
                      onChange={(e)=>{setSong(e.target.value)}}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"   
                  >
                    <Form.Label>Date of Release</Form.Label>
                    <Form.Control
                      type="date"
                      placeholder="Enter date of release"
                      onChange={(e)=>{setDoR(e.target.value)}} 
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"   
                  >
                    <Form.Label>Art Work</Form.Label>
                    <Form.Control
                      type="file"
                      placeholder="upload Art Work" 
                      onChange={(e)=>{setArtWork(e.target.files[0])}}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"   
                  >
                    <Form.Label>Artist</Form.Label>
                    <Form.Select aria-label="Default select example"
                     onChange={(e)=>{setSelectArtist(e.target.value)}}
                    >
                      <option>Search</option>
                      <option value="1">Ar Rahuman</option>
                      <option value="2">Aniruth</option>
                      <option value="3">Devisri Prasad</option>
                  </Form.Select>
                  <Button className="mt-2" variant="secondary" onClick={handleShowArtist}>+ Add Artist</Button>
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={addSongList}>
                  Save 
                </Button>
              </Modal.Footer>
            </Modal>

            <Modal show={addArtist} onHide={handleCloseArtist}>                 {/* Add artist Modal beignins */}
              <Modal.Header closeButton>
                <Modal.Title>Add Artist</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3" >
                    <Form.Label>Artist Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter artist name"
                      onChange={(e)=>{setArtistName(e.target.value)}}
                      
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                  >
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control
                      type="date"
                      placeholder="Enter date of birth"
                      onChange={(e)=>{setDoB(e.target.value)}}  
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    
                  >
                    <Form.Label>Bio</Form.Label>
                    <Form.Control as="textarea" rows={7} onChange={(e)=>{setBio(e.target.value)}} />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseArtist}>
                  Close
                </Button>
                <Button variant="primary" onClick={addArtistList}>
                  Save 
                </Button>
              </Modal.Footer>
            </Modal>

                                                                                        {/* Data displaying on song Table*/}

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
                  {songList.map((columns,index)=>(
                    <tr  key={index}>
                      <td className="px-5 py-2"><img style={{width:"100px", height:"100px"}} src={columns.artwork}/></td>
                      <td className="px-5 py-5">{columns.song}</td>
                      <td className="px-5 py-5">{columns.dor}</td>
                      <td className="px-5 py-5">{columns.artists}</td>
                      <td className="px-5 py-5">{<Rating  ratingValue={columns.rating} size={23}   onChange={(e)=>{setRating(e.target.value)}}/>}</td>

                  </ tr>
                  ))}              
              </tbody>
          </Table>

          <h1 className="font-weight-bold text-secondary mt-5 mb-5">Top 10 Artists</h1>
            
                                                                                           {/* Data displaying on artist Table*/}

          <Table striped bordered   >
            <thead>
              {artistHead.map((arthead)=>(
                <th className="px-5 py-5">{arthead}</th>
              ))}
            </thead>
            <tbody>
              {artistList.map((artistdetail,index)=>(
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