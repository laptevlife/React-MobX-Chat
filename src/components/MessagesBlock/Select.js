// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';

// const useStyles = makeStyles((theme) => ({
//     formControl: {
//         margin: theme.spacing(1),
//         background: "#fff",
//         // borderBottom: 'none',
//         // border: "3px solid red",
//         // outline: 'none'
//         minWidth: 120,
//     },
//     selectEmpty: {
//         border: "3px solid red",
//         // marginTop: theme.spacing(2),
//     },

// }));

// export default function SimpleSelect() {
//     const classes = useStyles();
//     const [age, setAge] = React.useState('');

//     const handleChange = (event) => {
//         setAge(event.target.value);
//     };

//     return (
//         <>

//             <FormControl
//                 className={`${classes.formControl} `}
//             >
//                 <Select
//                     value={age}
//                     onChange={handleChange}
//                     displayEmpty
//                     //   className={classes.selectEmpty}
//                     inputProps={{ 'aria-label': 'Without label' }}
//                 >
//                     {/* <MenuItem value="" disabled>
//             Placeholder
//           </MenuItem> */}
//                     <MenuItem value={10} default>Ten</MenuItem>
//                     <MenuItem value={20}>Twenty</MenuItem>
//                     <MenuItem value={30}>Thirty</MenuItem>
//                 </Select>
//             </FormControl>


//         </>
//     );
// }





import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useStore } from '../../Context'
import s from './MessagesBlock.module.scss'
// import MessagesBlock from './MessagesBlock';


const useStyles = makeStyles((theme) => ({
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 220,
    background: "#fff",
    // fontSize: '5px'
  },
  selectEmpty: {
    font: 'Roboto',
    fontSize: '14px',
    background: "#fff",
    height: '43px',
    display: 'flex',
    alignItems: 'center',
    paddingTop: '8px',
    paddingRight: '10px',
    borderBottom: "5px solid white",


    marginTop: theme.spacing(0),
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const store = useStore()
  const handleChange = (event) => {
    setAge(event.target.value);
    store.setchannelFilter(event.target.value)
  };

  return (
    <>


      <Select
        value={age}
        onChange={handleChange}
        displayEmpty
        className={classes.selectEmpty}
        inputProps={{ 'aria-label': 'Without label' }}
      >
        <MenuItem value={''} >ALL CHANNELS</MenuItem>
        <MenuItem value={'VK'}>VK</MenuItem>
        <MenuItem value={'FB'}>FB</MenuItem>
        <MenuItem value={'OK'}>OK</MenuItem>
      </Select>
    </>
  );
}