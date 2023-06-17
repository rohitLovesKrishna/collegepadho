import { TextareaAutosize, TextField, Grid, Paper, Typography, Select, MenuItem, Button, Box } from '@mui/material'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import emptyImage from '../../../assets/emptyImage.jpg'
import { useState, useEffect } from 'react';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import SendDataBtn from '../../Global/SendDataBtn';
import axios from 'axios';
import BASE_URL from '../../../constant';


const SelectComponent = (props) => { return (<><Grid mb={2} item container sx={{ justifyContent: "center", alignItems: "center" }} spacing={2} ><Grid item sx={{ width: "100%" }}><Typography mr="12px" fontSize="12px" color="#646c9a">{props.label}</Typography></Grid><Grid item lg={12} md={12} sm={12} xs={12}>  <FormControl sx={{ width: "100%" }}> <Select displayEmpty style={{ fontSize: "10px" }} renderValue={(selected) => { if (selected.length === 0) { return <em>{props.placeholder}</em>; } return props.value }} value={props.value} onChange={(e) => { props.onChange(e, props.in) }} onClick={(event) => event.stopPropagation()} size="small" id="mylabel" labelId="mylabel" sx={{ width: { lg: "100%", md: "100%" }, color: "black" }}>  <MenuItem sx={{ fontSize: "10px" }} disabled value=""> {props.label}</MenuItem>{props.listItems.map((item) => { return (<MenuItem key={item} sx={{ fontSize: "10px" }} value={item}>{item}</MenuItem>) })}</Select></FormControl></Grid></Grid></>) }
const TextComponent = (props) => { return (<><Grid mb={2} item container sx={{ justifyContent: "center", alignItems: "center" }} spacing={2}> <Grid item xs={12} sx={{ width: "100%" }}><Typography mr="14px" fontSize="12px" color="#646c9a">{props.label}</Typography></Grid> <Grid item lg={12} md={12} sm={12} xs={12}> <TextField sx={{ width: "100%" }} fullWidth value={props.value} onChange={(e) => { props.onChange(e, props.in) }} InputLabelProps={{ style: { fontSize: "10px" } }} focused={false} autoFocus size="small" id="searchInputadmin" label={props.placeholder} variant="outlined" /></Grid></Grid></>) }
const TextareaAutosizeComponent = (props) => { return (<Grid mb={2} item container sx={{ justifyContent: "center", alignItems: "center" }} spacing={2}><Grid item sx={{ width: "100%" }}><Typography mr="14px" fontSize="12px" color="#646c9a">{props.label}</Typography></Grid><Grid item lg={12} md={12} sm={12} xs={12}><TextareaAutosize value={props.value} onChange={(e) => { props.onChange(e, props.in) }} style={{ width: "100%", outline: "none" }} placeholder={props.placeholder} minRows={props.rows} /></Grid></Grid>) }

const ClgTabCourse = ({ selectionHandler }) => {
  const isDone = localStorage.getItem('STEP_7')
  const [isDisabled, setIsDisabled] = useState(false)
  const [isCourse, setIsCourse] = useState("");
  const [posToTop, setPosToTop] = useState(false)
  const [data, setData] = useState([])
  const [addMore, setAddMore] = useState(false)
  const [dataForm, setDataForm] = useState([{ stream: "" }, { courseLevel: "" }, { courseName: "" }, { courseDesc: "" }, { courseFee: "" }, { seats: "" }, { duration: "" }, { courseDeliveryMode: "" }, { entranceExams: "" }, { tutionFees: "" }, { specialisation: "" }]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(emptyImage);
  useEffect(() => { if (selectedImage) { setImageUrl(URL.createObjectURL(selectedImage)); } }, [selectedImage]);
  const fetchStreams = () => {
    axios.get(`${BASE_URL}/api/stream`).then((res) => { setData(res.data.response) })
  }
  useEffect(() => fetchStreams(), [])
  const dataToServer = (e) => {
    e.preventDefault();
    const collegeID = localStorage.getItem('COLLEGE_ID')
    if (isCourse === 'Without Course') { selectionHandler('Placement') };
    if (isCourse === 'With Course') {
      const formdata = new FormData();
      formdata.append('stream', dataForm[0].stream);
      formdata.append('courseLevel', dataForm[1].courseLevel);
      formdata.append('courseName', dataForm[2].courseName);
      formdata.append('courseDescription', dataForm[3].courseDesc);
      formdata.append('coursefee', dataForm[4].courseFee);
      formdata.append('duration', dataForm[6].duration);
      formdata.append('numberOfSeats', dataForm[5].seats);
      formdata.append('courseMode', dataForm[7].courseDeliveryMode);
      formdata.append('entranceExamsAccepted', dataForm[8].entranceExams);
      formdata.append('totalTutionFee', dataForm[9].tutionFees);
      formdata.append('specialisation', dataForm[10].specialisation);
      formdata.append('myFile', selectedImage);
      formdata.append('cid', JSON.parse(collegeID));
      axios.post(`${BASE_URL}/api/course`, formdata).then((res) => { alert('Course added successfully!'); localStorage.setItem("STEP_7", 7); setIsDisabled(true); setAddMore(true) }).catch(err => { console.log(err); })
    }
  }
  useEffect(() => { if (addMore) { setAddMore(true) } }, [addMore])
  useEffect(() => { if (isCourse === "Without Course") { setIsDisabled(false) } }, [isCourse])
  useEffect(() => { if (isDone) { setIsDisabled(true) } }, [isDone])
  const formResetHandler = () => {
    setPosToTop(true)
    setDataForm([{ stream: "" }, { courseLevel: "" }, { courseName: "" }, { courseDesc: "" }, { courseFee: "" }, { seats: "" }, { duration: "" }, { courseDeliveryMode: "" }, { entranceExams: "" }, { tutionFees: "" }, { specialisation: "" }])
    setImageUrl(emptyImage)
    setSelectedImage(null)
    setIsDisabled(false);
    setAddMore(prev => !prev)
    setPosToTop(false)
  }
  useEffect(() => { window.scrollTo(0, 0) }, [posToTop])
  return (
    <>
      <form onSubmit={dataToServer}>
        <Grid item container sx={{ justifyContent: "center", alignItems: "center" }} spacing={2} >
          <Grid item>
            <FormControl sx={{ width: "100%" }}>
              <RadioGroup aria-labelledby="demo-radio-buttons-group-label" onChange={(e) => setIsCourse(e.target.value)} defaultValue="" name="radio-buttons-group">
                <FormControlLabel sx={{ color: "#646c9a" }} value="Without Course" control={<Radio size='small' />} label="Add without course" />
                <FormControlLabel sx={{ color: "#646c9a" }} value="With Course" control={<Radio size='small' />} label="Add course" />
              </RadioGroup>
            </FormControl>
          </Grid>
          {isCourse === "With Course" ? "" : <SendDataBtn onClick={() => selectionHandler("Placement")} type="Next" disabled={!isDisabled} >Next Step</SendDataBtn>}
          <Grid mb={2} item container sx={{ display: isCourse === "With Course" ? 'flex' : 'none', justifyContent: "center", alignItems: "center" }} spacing={2}>
            <Paper sx={{ m: "10px", p: "5px", width: "100%", mb: "0px" }} elevation={0}>
              <Typography>Add course</Typography>
              <SelectComponent in={0} onChange={(e, i) => { const newList = [...dataForm]; newList[i].stream = e.target.value; setDataForm(newList) }} value={dataForm[0].stream} label="Stream" placeholder="Select Stream" listItems={data.map((ele) => { return (ele.stream) })} />
              <SelectComponent in={1} onChange={(e, i) => { const newList = [...dataForm]; newList[i].courseLevel = e.target.value; setDataForm(newList) }} value={dataForm[1].courseLevel} label="Course Level" placeholder="Select Course Level" listItems={["Graduation", "Post Graduation"]} />
              <TextComponent in={2} onChange={(e, i) => { const newList = [...dataForm]; newList[i].courseName = e.target.value;; setDataForm(newList) }} value={dataForm[2].courseName} label="Course name" placeholder="Enter course name.." />
              <TextareaAutosizeComponent in={3} onChange={(e, i) => { const newList = [...dataForm]; newList[i].courseDesc = e.target.value;; setDataForm(newList) }} value={dataForm[3].courseDesc} label="Course description" rows={6} />
              <TextComponent in={4} onChange={(e, i) => { const newList = [...dataForm]; newList[i].courseFee = e.target.value;; setDataForm(newList) }} value={dataForm[4].courseFee} label="Course fee" placeholder="Please enter only number" />
              <TextComponent in={5} onChange={(e, i) => { const newList = [...dataForm]; newList[i].seats = e.target.value;; setDataForm(newList) }} value={dataForm[5].seats} label="Number of seats" placeholder="Please enter only number" />
              <TextComponent in={6} onChange={(e, i) => { const newList = [...dataForm]; newList[i].duration = e.target.value;; setDataForm(newList) }} value={dataForm[6].duration} label="Duration" placeholder="Please enter only number" />
              <SelectComponent in={7} onChange={(e, i) => { const newList = [...dataForm]; newList[i].courseDeliveryMode = e.target.value; setDataForm(newList) }} value={dataForm[7].courseDeliveryMode} label="Course delivery mode" placeholder="Select Course Delivery Mode" listItems={["Regular", "Evening", "Online"]} />
              <TextareaAutosizeComponent in={8} onChange={(e, i) => { const newList = [...dataForm]; newList[i].entranceExams = e.target.value;; setDataForm(newList) }} value={dataForm[8].entranceExams} label="Entrance exams accepted" rows={6} />
              <TextComponent in={9} onChange={(e, i) => { const newList = [...dataForm]; newList[i].tutionFees = e.target.value; setDataForm(newList) }} value={dataForm[9].tutionFees} label="Total tution fees (Rs.)" placeholder="Please enter only number" />
              <TextareaAutosizeComponent in={10} onChange={(e, i) => { const newList = [...dataForm]; newList[i].specialisation = e.target.value; setDataForm(newList) }} value={dataForm[10].specialisation} label="Specialisation" rows={6} />
              <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                <Paper sx={{ border: "1px solid #ebedf2", width: "70%", height: "fit-content", display: "flex", alignItems: "center", p: "10px", flexDirection: "column" }} elevation={3}>
                  <img width="100%" height="90%" htmlFor="searchInputadmin" src={imageUrl} alt="empty"></img>
                  <Button component={"label"} disableRipple><input onChange={e => setSelectedImage(e.target.files[0])} type='file' hidden={true} color="#646c9a" /> <CameraAltIcon />Upload course image(800x533)</Button>
                </Paper>
              </Grid>

              <Grid item xs={12}>
                <Box sx={{ display: "flex", justifyContent: "center", mt: "15px" }}>
                  <Button disabled={!addMore} onClick={formResetHandler} variant="contained" sx={{ display: isCourse ? 'flex' : 'none', bgcolor: "#5d78ff", borderRadius: "20px" }}>Add new Course</Button>
                </Box>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
        <Grid item container>
          {isCourse === "With Course" ?
            <>
              <SendDataBtn type="Send" disabled={false} >Send Data</SendDataBtn>
              <SendDataBtn onClick={() => selectionHandler("Placement")} type="Next" disabled={true} >Next Step</SendDataBtn>
            </> : ""}
        </Grid> </form>
    </>
  )
}

export default ClgTabCourse