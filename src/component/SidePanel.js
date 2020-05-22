import React ,{useEffect} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CloseIcon from '@material-ui/icons/Close'
import { sideNavBarList } from '../utils/data'
import {REMOVE_TAB} from '../actions/index'
import { connect } from 'react-redux'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

 function SimpleTabs(props) {
    const {closeTab , sideNavBarList} = props
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [tabeMenu,setTabeMenu] = React.useState([])
  useEffect(() => {
      setTabeMenu(sideNavBarList)
  })

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function tabeClose(id) {
    closeTab(id)
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            {tabeMenu.map((dataObj,index) => {
                return(
                    dataObj.isOpen && 
                    <Tab 
                        key = {index}
                        value = {(index)}
                        label= {dataObj.name} 
                        {...a11yProps(index)}
                        icon = {
                        <CloseIcon 
                            onClick = {() => tabeClose(dataObj.id)}
                        />
                    }
                    />
                )
            })}
        </Tabs>
      </AppBar>
        {tabeMenu.map((dataObj,index) => (
            dataObj.isOpen &&
            <TabPanel 
                value={value} 
                index={index}
                key = {index}
            >
                {dataObj.content}
            </TabPanel>
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
    sideNavBarList : state.mainreducer.sideNavBarList
})

const mapDispatchToProps  = dispatch => ({
    closeTab : (id) => dispatch({
        type : REMOVE_TAB,
        id
    })
})

export default connect(mapStateToProps,mapDispatchToProps)(SimpleTabs)